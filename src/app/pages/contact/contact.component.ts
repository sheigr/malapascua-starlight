import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { rooms, site } from '../../data/site.data';
import { InquiryService } from '../../inquiry.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private readonly api = inject(InquiryService);
  readonly site = site;
  readonly rooms = rooms;
  readonly mapUrl: SafeResourceUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(site.mapEmbed);
  readonly status = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  readonly errorText = signal('');

  readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
    phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(24)]],
    checkIn: ['', Validators.required],
    checkOut: ['', Validators.required],
    guests: [2, [Validators.required, Validators.min(1), Validators.max(8)]],
    room: ['not-sure', Validators.required],
    message: ['', Validators.maxLength(800)],
    website: [''],
  });

  constructor() {
    const requested = inject(ActivatedRoute).snapshot.queryParamMap.get('room');
    if (requested && rooms.some((room) => room.slug === requested)) {
      this.form.controls.room.setValue(requested);
    }
  }

  invalid(name: 'name' | 'email' | 'phone' | 'checkIn' | 'checkOut' | 'guests' | 'message'): boolean {
    const control = this.form.controls[name];
    return control.invalid && control.touched;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.status.set('error');
      this.errorText.set('Check the fields marked below.');
      return;
    }

    const value = this.form.getRawValue();
    if (value.checkOut <= value.checkIn) {
      this.status.set('error');
      this.errorText.set('Check-out has to be after check-in.');
      return;
    }

    this.status.set('sending');
    this.errorText.set('');
    this.api.send(value).subscribe({
      next: () => this.status.set('sent'),
      error: () => {
        this.status.set('error');
        this.errorText.set('The form could not be saved. Please call the resort.');
      },
    });
  }
}
