import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService, Toast } from './toast.service';

@Component({
  selector: 'app-toast',
  standalone: false, // This should be true if you want it to be used standalone
  templateUrl: './toast.html',
   styleUrls: ['./toast.css']
})
export class ToastComponent implements OnInit, OnDestroy {
  toast: Toast | null = null;
  private subscription!: Subscription;

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.subscription = this.toastService.toastState.subscribe(toastMessage => {
      this.toast = toastMessage;
      // Auto-hide after 3 seconds
      setTimeout(() => this.toast = null, 3000);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
