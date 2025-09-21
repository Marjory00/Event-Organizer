import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new BehaviorSubject<Toast | null>(null);
  toastState = this.toastSubject.asObservable();

  show(message: string, type: Toast['type'] = 'info'): void {
    this.toastSubject.next({ message, type });
  }

  clear(): void {
    this.toastSubject.next(null);
  }
}
