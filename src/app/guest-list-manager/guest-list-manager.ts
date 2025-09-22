import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GuestService } from '../services/guest/guest.service';
import { Guest } from '../models/guest/guest.model'; // Correct import

@Component({
  selector: 'app-guest-list-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './guest-list-manager.html',
  styleUrls: ['./guest-list-manager.css'] // Note the 's' in styleUrls
})
export class GuestListManager implements OnInit {
updateRsvpStatus(arg0: number,arg1: string) {
throw new Error('Method not implemented.');
}
updateRsvp(_t16: Guest,arg1: string) {
throw new Error('Method not implemented.');
}
  // Array to store guest data
  guests: Guest[] = [];
  newGuestName = '';
  newGuestEmail = '';
  editingGuest: Guest | null = null;
  editingName = '';
  editingEmail = '';
  editingRsvp: Guest['rsvpStatus'] = 'Pending';

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
    // Fetch data using the service instead of hardcoding
    this.guests = this.guestService.getGuests();
  }

  // Adds a new guest to the list
  addGuest(): void {
    if (this.newGuestName && this.newGuestEmail) {
      const newGuest = {
        name: this.newGuestName,
        email: this.newGuestEmail,
        rsvpStatus: 'Pending' as Guest['rsvpStatus'],
        rsvp: null // or provide a default value as appropriate
      };
      this.guestService.addGuest(newGuest);
      this.guests = this.guestService.getGuests(); // Refresh Lists
      this.newGuestName = '';
      this.newGuestEmail = '';
    }
  }

  startEdit(guest: Guest): void {
    this.editingGuest = { ...guest };
    this.editingName = guest.name;
    this.editingEmail = guest.email;
    this.editingRsvp = guest.rsvpStatus;
  }


   saveEdit(): void {
    if (this.editingGuest) {
      this.editingGuest.name = this.editingName;
      this.editingGuest.email = this.editingEmail;
      this.editingGuest.rsvpStatus = this.editingRsvp;
      this.guestService.updateGuest(this.editingGuest);
      this.guests = this.guestService.getGuests(); // Refresh list
      this.editingGuest = null;
    }
  }

  cancelEdit(): void {
    this.editingGuest = null;
  }

  deleteGuest(id: number): void {
    this.guestService.deleteGuest(id);
    this.guests = this.guestService.getGuests(); // Refresh list
  }
}
