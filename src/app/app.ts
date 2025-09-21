import { Component, signal } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
logout() {
throw new Error('Method not implemented.');
}
  protected readonly title = signal('Event-Organizer');
isLoggedIn$: Observable<unknown> | Subscribable<unknown> | PromiseLike<unknown> | undefined;
}
