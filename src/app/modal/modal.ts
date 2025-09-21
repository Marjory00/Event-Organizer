import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.html',
  styleUrl: './modal.css',
  animations: [
    trigger('modalFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.3s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class Modal {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  close(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
