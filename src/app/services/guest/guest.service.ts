import { Injectable } from '@angular/core';
import { Guest } from '../../models/guest/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private guests: Guest[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', rsvpStatus: 'Attending', rsvp: null },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', rsvpStatus: 'Pending', rsvp: null },
    { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', rsvpStatus: 'Not Attending', rsvp: null }
  ];
  private nextId = 4;

  constructor() { }

  getGuests(): Guest[] {
    return this.guests;
  }

  addGuest(guest: Omit<Guest, 'id'>): void {
    const newGuest: Guest = {
      ...guest,
      id: this.nextId++
    };
    this.guests.push(newGuest);
  }

  updateGuest(updatedGuest: Guest): void {
    const index = this.guests.findIndex(g => g.id === updatedGuest.id);
    if (index !== -1) {
      this.guests[index] = updatedGuest;
    }
  }

  deleteGuest(id: number): void {
    this.guests = this.guests.filter(g => g.id !== id);
  }
};
