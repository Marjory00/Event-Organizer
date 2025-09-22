import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Interfaces for your data types
interface Guest {
  name: string;
  rsvp: 'Yes' | 'No' | 'Pending';
}

interface Vendor {
  name: string;
  contact: string;
  service: string;
}

interface BudgetItem {
  name: string;
  cost: number;
}

interface Task {
  name: string;
  completed: boolean;
}

interface ScheduleItem {
  time: string;
  activity: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Guest List Data Stream
  private guestsSource = new BehaviorSubject<Guest[]>([]);
  guests$ = this.guestsSource.asObservable();

  // Vendor Contact Data Stream
  private vendorsSource = new BehaviorSubject<Vendor[]>([]);
  vendors$ = this.vendorsSource.asObservable();

  // Budget Planner Data Stream
  private budgetItemsSource = new BehaviorSubject<BudgetItem[]>([]);
  budgetItems$ = this.budgetItemsSource.asObservable();

  // Task Checklist Data Stream
  private tasksSource = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSource.asObservable();

  // Printable Schedule Data Stream
  private scheduleSource = new BehaviorSubject<ScheduleItem[]>([]);
  schedule$ = this.scheduleSource.asObservable();

  constructor() {
    // Initialize with some mock data
    this.guestsSource.next([
      { name: 'Jane Doe', rsvp: 'Yes' },
      { name: 'John Smith', rsvp: 'Pending' }
    ]);

    this.vendorsSource.next([
      { name: 'Caterer Co.', contact: '555-1234', service: 'Catering' },
      { name: 'DJ Sound', contact: '555-5678', service: 'Music' }
    ]);

    this.budgetItemsSource.next([
      { name: 'Venue Rental', cost: 2500 },
      { name: 'Catering', cost: 1500 }
    ]);

    this.tasksSource.next([
      { name: 'Send out invitations', completed: false },
      { name: 'Book the photographer', completed: true }
    ]);

    this.scheduleSource.next([
      { time: '10:00 AM', activity: 'Guest Arrival' },
      { time: '11:00 AM', activity: 'Ceremony Begins' }
    ]);
  }

  // Guest List Methods
  addGuest(newGuest: Guest): void {
    const currentGuests = this.guestsSource.getValue();
    this.guestsSource.next([...currentGuests, newGuest]);
  }

  updateRsvp(guest: Guest, status: 'Yes' | 'No' | 'Pending'): void {
    const guests = this.guestsSource.getValue();
    const guestToUpdate = guests.find(g => g.name === guest.name);
    if (guestToUpdate) {
      guestToUpdate.rsvp = status;
      this.guestsSource.next([...guests]); // Emit the updated array
    }
  }

  // Vendor Contact Methods
  addVendor(newVendor: Vendor): void {
    const currentVendors = this.vendorsSource.getValue();
    this.vendorsSource.next([...currentVendors, newVendor]);
  }

  // Budget Planner Methods
  addBudgetItem(newItem: BudgetItem): void {
    const currentItems = this.budgetItemsSource.getValue();
    this.budgetItemsSource.next([...currentItems, newItem]);
  }

  // Task Checklist Methods
  addTask(newTask: Task): void {
    const currentTasks = this.tasksSource.getValue();
    this.tasksSource.next([...currentTasks, newTask]);
  }

  toggleCompletion(task: Task): void {
    const tasks = this.tasksSource.getValue();
    const taskToUpdate = tasks.find(t => t.name === task.name);
    if (taskToUpdate) {
      taskToUpdate.completed = !taskToUpdate.completed;
      this.tasksSource.next([...tasks]);
    }
  }
}
