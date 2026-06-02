import { Component, OnInit, signal, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { ConsultationService } from './../../../../Core/Services/Consultation/consultation-service';
import { ServiceDto } from '../../../../Core/Models/ServiceModels/service-dto';
import { ServiceService } from '../../../../Core/Services/ServiceService/service-service';
import { ToastService } from '../../../../Core/Services/Toast/toast-service';

interface Stat {
  number: string;
  label: string;
  desc: string;
}

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './book-appointment.html',
  styleUrls: ['./book-appointment.scss'],
})
export class BookAppointmentComponent implements OnInit {
  form!: FormGroup;
  isLoading = signal(false);
  services = signal<ServiceDto[]>([]);
  servicesLoading = signal(false);

  // استخدام الـ DestroyRef لعمل Unsubscribe تلقائي وآمن عند الخروج من الصفحة
  private destroyRef = inject(DestroyRef);

  stats: Stat[] = [
    {
      number: '6847+',
      label: 'BOOK_APPOINTMENT.STATS.HAPPY_CUSTOMERS.LABEL',
      desc: 'BOOK_APPOINTMENT.STATS.HAPPY_CUSTOMERS.DESC',
    },
    {
      number: '100%',
      label: 'BOOK_APPOINTMENT.STATS.CLIENTS_SATISFIED.LABEL',
      desc: 'BOOK_APPOINTMENT.STATS.CLIENTS_SATISFIED.DESC',
    },
    {
      number: '8504',
      label: 'BOOK_APPOINTMENT.STATS.PROJECTS_DONE.LABEL',
      desc: 'BOOK_APPOINTMENT.STATS.PROJECTS_DONE.DESC',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private consultationService: ConsultationService,
    private serviceService: ServiceService,
    private toastService: ToastService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(150)]],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', [Validators.required]],
      message: [''],
      serviceId: [null, [Validators.required]],
    });

    this.loadServices();

    this.translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.loadServices();
      });
  }

  private loadServices(): void {
    this.servicesLoading.set(true);
    this.serviceService.getAll({ pageIndex: 0, pageSize: 100 }).subscribe({
      next: (result) => {
        this.services.set(result.data);
        this.servicesLoading.set(false);
      },
      error: () => {
        this.servicesLoading.set(false);
      },
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.consultationService.create(this.form.value).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.toastService.success(
          this.translate.instant('BOOK_APPOINTMENT.TOAST.SUCCESS')
        );
        this.form.reset({ serviceId: null });
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error(
          err?.error?.detail ?? this.translate.instant('BOOK_APPOINTMENT.TOAST.ERROR')
        );
      },
    });
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}
