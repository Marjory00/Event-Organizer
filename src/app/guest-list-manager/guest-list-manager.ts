import { Component, OnInit} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { DataService } from '../data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator

// Interface for a single guest

interface Guest {
  name: string;
  rsvp: 'Yes' | 'No' | 'Pending';
}

@Component({
  selector: 'app-guest-list-manager',
  standalone: false,
  templateUrl: './guest-list-manager.html',
  styleUrl: './guest-list-manager.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class GuestListManager implements OnInit{
    // Use Observable to get data from the service
  guests$!: Observable<Guest[]>;
  newGuestName: string = '';

  // Inject the DataService
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Subscribe to the guests data stream from the service
    this.guests$ = this.dataService.guests$;
  }

  // Adds a new guest using the DataService
  addGuest(): void {
    if (this.newGuestName.trim()) {
      const newGuest: Guest = { name: this.newGuestName, rsvp: 'Pending' };
      this.dataService.addGuest(newGuest);
      this.newGuestName = ''; // Clear the input field
    }
  }

  // Updates the RSVP status of a guest using the DataService
  updateRsvp(guest: Guest, status: 'Yes' | 'No' | 'Pending'): void {
    this.dataService.updateRsvp(guest, status);
  }
}
