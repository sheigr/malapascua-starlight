import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface InquiryPayload {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  room: string;
  message: string;
  website: string;
}

@Injectable({ providedIn: 'root' })
export class InquiryService {
  private readonly http = inject(HttpClient);

  send(payload: InquiryPayload): Observable<{ ok: boolean; id?: string }> {
    return this.http.post<{ ok: boolean; id?: string }>('/api/inquiries', payload);
  }
}
