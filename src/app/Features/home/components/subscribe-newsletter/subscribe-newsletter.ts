import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { NewsletterSubscriberService } from '../../../../Core/Services/NewsletterSubscriber/newsletter-subscriber-service';
import { ToastService } from '../../../../Core/Services/Toast/toast-service';


@Component({
  selector: 'app-subscribe-newsletter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './subscribe-newsletter.html',
  styleUrls: ['./subscribe-newsletter.scss'],
})
export class SubscribeNewsletterComponent implements OnDestroy {
  subscribeForm: FormGroup;
  isLoading = false;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private newsletterService: NewsletterSubscriberService,
    private toastService: ToastService
  ) {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(256)]],
    });
  }

  get emailControl() {
    return this.subscribeForm.get('email');
  }

  get emailErrors(): string {
    const ctrl = this.emailControl;
    if (!ctrl || !ctrl.touched || ctrl.valid) return '';
    if (ctrl.hasError('required')) return 'Email is required.';
    if (ctrl.hasError('email')) return 'Please enter a valid email address.';
    if (ctrl.hasError('maxlength')) return 'Email must not exceed 256 characters.';
    return '';
  }

  onSubmit(): void {
    this.subscribeForm.markAllAsTouched();
    if (this.subscribeForm.invalid) return;

    this.isLoading = true;

    this.newsletterService
      .create({ email: this.emailControl?.value })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.toastService.success("You've subscribed successfully!");
          this.subscribeForm.reset();
        },
        error: (err) => {
          this.isLoading = false;
           console.log('Full error:', err);
  console.log('Error body:', err.error);
  console.log('Status:', err.status);
          this.toastService.error(
            err?.error?.detail || 'Something went wrong. Please try again.'
          );
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
