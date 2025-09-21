import { Component, OnInit} from '@angular/core';

// Interface for a single guest

interface Guest {
  name: string;
  rsvp: 'Yes' | 'No' | 'Pending';
}

@Component({
  selector: 'app-guest-list-manager',
  standalone: false,
  templateUrl: './guest-list-manager.html',
  styleUrl: './guest-list-manager.css'
})
export class GuestListManager implements OnInit{
   // Array to store guest data
  guests: Guest[] = [];
  newGuestName: string = '';

  constructor() { }

  ngOnInit(): void {
    // Initial data for demonstration
    this.guests.push({ name: 'Jane Doe', rsvp: 'Yes' });
    this.guests.push({ name: 'John Smith', rsvp: 'Pending' });
  }

  // Adds a new guest to the list
  addGuest(): void {
    if (this.newGuestName.trim()) {
      this.guests.push({ name: this.newGuestName, rsvp: 'Pending' });
      this.newGuestName = ''; // Clear the input field
    }
  }

  // Updates the RSVP status of a guest
  updateRsvp(guest: Guest, status: 'Yes' | 'No' | 'Pending'): void {
    guest.rsvp = status;
  }
}
