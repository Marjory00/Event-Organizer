import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Guest {
  id: number;
  name: string;
  rsvp: 'Yes' | 'No' | 'Pending';
}

@Component({
  selector: 'app-guest-list-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './guest-list-manager.html',
  styleUrls: ['./guest-list-manager.css']
})
export class GuestListManager implements OnInit {
  public guests$!: Observable<Guest[]>;
  public newGuest: Omit<Guest, 'id'> = { name: '', rsvp: 'Pending' };

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.guests$ = this.dataService.guests$;
  }

  addGuest(): void {
    if (this.newGuest.name.trim()) {
      this.dataService.addGuest(this.newGuest);
      this.newGuest = { name: '', rsvp: 'Pending' };
    }
  }

  removeGuest(id: number): void {
    this.dataService.removeGuest(id);
  }

  toggleRsvp(id: number, rsvp: string): void {
    const validRsvp = rsvp === 'Yes' || rsvp === 'No' || rsvp === 'Pending' ? rsvp : 'Pending';
    this.dataService.updateGuestRsvp(id, validRsvp);
  }
}
