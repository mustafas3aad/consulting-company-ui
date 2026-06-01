import { ConsultationService } from './../../../../Core/Services/Consultation/consultation-service';
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServiceDto } from '../../../../Core/Models/ServiceModels/service-dto';
import { ServiceService } from '../../../../Core/Services/ServiceService/service-service';
import { ToastService } from '../../../../Core/Services/Toast/toast-service';



interface Stat {
  number: string;
  label:  string;
  desc:   string;
}

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-appointment.html',
  styleUrls: ['./book-appointment.scss'],
})
export class BookAppointmentComponent implements OnInit {

  form!: FormGroup;
  isLoading       = signal(false);
  services        = signal<ServiceDto[]>([]);
  servicesLoading = signal(false);

  stats: Stat[] = [
    {
      number: '6847+',
      label:  'Happy Customers',
      desc:   'We have helped hundreds of businesses improve operations, increase profitability, and achieve sustainable growth.',
    },
    {
      number: '100%',
      label:  'Clients Satisfied',
      desc:   'Our consulting solutions are designed to deliver measurable results and long-term business success.',
    },
    {
      number: '8504',
      label:  'Projects Done',
      desc:    'From business strategy to digital transformation, we deliver tailored consulting solutions across industries.',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private consultationService: ConsultationService,
    private serviceService: ServiceService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName:    ['', [Validators.required, Validators.maxLength(150)]],
      email:       ['', [Validators.required, Validators.email]],
      companyName: ['', [Validators.required]],
      message:     [''],
      serviceId:   [null, [Validators.required]],
    });

    this.loadServices();
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

  get f() { return this.form.controls; }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);

    this.consultationService.create(this.form.value).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.toastService.success('Your request has been submitted successfully!');
        this.form.reset({ serviceId: null });
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error(
          err?.error?.detail ?? 'Something went wrong. Please try again.'
        );
      },
    });
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}
