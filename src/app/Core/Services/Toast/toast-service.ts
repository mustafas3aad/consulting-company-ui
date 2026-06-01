import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastInterface, ToastType } from '../../Models/Toast/toast';


@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<ToastInterface[]>([]);
  toasts$ = this.toastsSubject.asObservable();

  private counter = 0;

  show(message: string, type: ToastType = 'success', duration = 3000) {
    const toast: ToastInterface = {
      id: ++this.counter,
      message,
      type,
      duration
    };
    this.toastsSubject.next([...this.toastsSubject.value, toast]);
    setTimeout(() => this.remove(toast.id), duration);
  }

  remove(id: number) {
    this.toastsSubject.next(this.toastsSubject.value.filter(t => t.id !== id));
  }

  success(message: string) { this.show(message, 'success'); }
  error(message: string)   { this.show(message, 'error');   }
}
