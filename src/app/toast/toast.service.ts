import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

/**
 * Interface for a toast notification.
 */
export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new Subject<Toast>();

  /**
   * The stream of toast notifications that components can subscribe to.
   */
  toastState: Observable<Toast> = this.toastSubject.asObservable();

  /**
   * Pushes a new toast notification to the stream.
   * @param message The message to display in the toast.
   * @param type The type of toast ('success', 'error', 'info').
   */
  show(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
    this.toastSubject.next({ message, type });
  }
}
