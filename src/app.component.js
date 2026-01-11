
import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule] // Import for form directives
})
export class AppComponent {
  fb = inject(FormBuilder);
  
  timerId;
  kickoffDate = new Date('2026-01-14T00:00:00');

  countdown = signal({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  formSubmissionStatus = signal('idle');
  rsvpForm;
  
  marathonLocations = ['North Park', 'Downtown Square', 'East Community Center', 'West Yoga Hub', 'South Beach Plaza'];
  communityYogaLocations = ['Grand Hall', 'Convention Center', 'University Arena', 'City Stadium', 'Waterfront Pavilion'];

  selectedEventLocations = computed(() => {
    const event = this.rsvpForm.get('session')?.value;
    if (event === 'Main Marathon') {
      return this.marathonLocations;
    }
    if (event === 'Community Yoga') {
      return this.communityYogaLocations;
    }
    return [];
  });

  constructor() {
    this.rsvpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      session: ['', Validators.required],
      location: ['']
    });

    this.rsvpForm.get('session').valueChanges.subscribe(value => {
      const locationControl = this.rsvpForm.get('location');
      if (value === 'Main Marathon' || value === 'Community Yoga') {
        locationControl.setValidators([Validators.required]);
      } else {
        locationControl.clearValidators();
      }
      locationControl.updateValueAndValidity();
      locationControl.reset();
    });
  }

  ngOnInit() {
    this.updateCountdown();
    this.timerId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.kickoffDate.getTime() - now;

    if (distance < 0) {
      this.countdown.set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      if (this.timerId) {
        clearInterval(this.timerId);
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.countdown.set({ days, hours, minutes, seconds });
  }

  onSubmitRsvp() {
    if (this.rsvpForm.valid) {
      console.log('RSVP Submitted:', this.rsvpForm.value);
      this.formSubmissionStatus.set('submitted');
      this.rsvpForm.reset();
      setTimeout(() => this.formSubmissionStatus.set('idle'), 5000);
    } else {
      this.formSubmissionStatus.set('error');
      Object.keys(this.rsvpForm.controls).forEach(field => {
        const control = this.rsvpForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      setTimeout(() => this.formSubmissionStatus.set('idle'), 5000);
    }
  }

  scrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
