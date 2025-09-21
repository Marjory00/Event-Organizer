import { Component, OnInit } from '@angular/core';
import { Toast, ToastService } from '../toast';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-toast',
  standalone: false,
  templateUrl: './toast.html',
  styleUrl: './toast.css',
  animations: [
    trigger('toastAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class ToastComponent implements OnInit { // <-- Renamed to ToastComponent
  toast: Toast | null = null;
  private timeoutId: any;

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.toastService.toastState.subscribe(toast => {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.toast = toast;
      this.timeoutId = setTimeout(() => this.toast = null, 3000);
    });
  }
}
