import { randomUUID } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { Router } from 'express';

const ROOM_SLUGS = new Set([
  'not-sure',
  'superior-terrace',
  'superior-balcony',
  'super-deluxe',
  'super-deluxe-family',
]);

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

interface Inquiry {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  room: string;
  message: string;
}

function storePath(): string {
  return resolve(process.cwd(), process.env['INQUIRY_STORE'] || 'data/inquiries.json');
}

function readStore(): Inquiry[] {
  const path = storePath();
  if (!existsSync(path)) {
    return [];
  }
  try {
    const parsed = JSON.parse(readFileSync(path, 'utf8')) as unknown;
    return Array.isArray(parsed) ? (parsed as Inquiry[]) : [];
  } catch {
    return [];
  }
}

function writeStore(inquiries: Inquiry[]): void {
  const path = storePath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(inquiries, null, 2));
}

function text(value: unknown, max: number): string {
  if (typeof value !== 'string') {
    return '';
  }
  return value.replace(/[\u0000-\u001F]/g, '').trim().slice(0, max);
}

function validDate(value: string): boolean {
  if (!DATE.test(value)) {
    return false;
  }
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

export const api = Router();

api.get('/health', (_req, res) => {
  res.json({ ok: true });
});

api.post('/inquiries', (req, res) => {
  const body = req.body as Record<string, unknown>;
  if (text(body['website'], 200)) {
    res.status(201).json({ ok: true });
    return;
  }

  const inquiry = {
    name: text(body['name'], 80),
    email: text(body['email'], 120),
    phone: text(body['phone'], 24),
    checkIn: text(body['checkIn'], 10),
    checkOut: text(body['checkOut'], 10),
    guests: Number(body['guests']),
    room: text(body['room'], 40),
    message: text(body['message'], 800),
  };

  const errors: string[] = [];
  if (inquiry.name.length < 2) errors.push('Enter your name.');
  if (!EMAIL.test(inquiry.email)) errors.push('Enter a valid email.');
  if (inquiry.phone.replace(/\D/g, '').length < 7) errors.push('Enter a phone number.');
  if (!validDate(inquiry.checkIn) || !validDate(inquiry.checkOut)) errors.push('Enter check-in and check-out dates.');
  if (validDate(inquiry.checkIn) && validDate(inquiry.checkOut) && inquiry.checkOut <= inquiry.checkIn) {
    errors.push('Check-out has to be after check-in.');
  }
  if (!Number.isInteger(inquiry.guests) || inquiry.guests < 1 || inquiry.guests > 8) {
    errors.push('Guests must be from 1 to 8.');
  }
  if (!ROOM_SLUGS.has(inquiry.room)) errors.push('Choose a room.');

  if (errors.length) {
    res.status(400).json({ ok: false, errors });
    return;
  }

  const saved: Inquiry = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...inquiry,
  };
  const all = readStore();
  all.push(saved);
  writeStore(all);
  res.status(201).json({ ok: true, id: saved.id });
});
