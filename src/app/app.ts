import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule here
  styleUrls: ['./app.css'],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'Event Organizer';
}
