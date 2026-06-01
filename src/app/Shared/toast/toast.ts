import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastInterface } from '../../Core/Models/Toast/toast';
import { ToastService } from '../../Core/Services/Toast/toast-service';


@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast {
  toasts: ToastInterface[] = [];

  constructor(private toastService: ToastService) {
    this.toastService.toasts$.subscribe(t => this.toasts = t);
  }

  close(id: number) {
    this.toastService.remove(id);
  }
}
