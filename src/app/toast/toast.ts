import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService, Toast as ToastInterface } from './toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.html',
  imports: [CommonModule],
  styleUrls: ['./toast.css']
})
export class Toast implements OnInit, OnDestroy {
  toast: ToastInterface | null = null;
  message: string = '';
  private subscription: Subscription = new Subscription();
  private toastTimeout!: ReturnType<typeof setTimeout>;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.subscription = this.toastService.toastState.subscribe(toastMessage => {
      this.toast = toastMessage;
      this.message = toastMessage ? toastMessage.message : '';

      // Clear any existing timeout to prevent overlap
      clearTimeout(this.toastTimeout);

      // Auto-hide after 3 seconds
      if (this.toast) {
        this.toastTimeout = setTimeout(() => {
          this.toastService.clear();
        }, 3000);
      }
    });
  }

  closeToast(): void {
    this.toastService.clear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    clearTimeout(this.toastTimeout);
  }
}
