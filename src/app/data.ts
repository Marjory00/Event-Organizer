import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

// Interfaces for your data types
interface Guest {
  id: number;
  name: string;
  rsvp: 'Yes' | 'No' | 'Pending';
}

interface Vendor {
  id: number;
  name: string;
  contact: string;
  service: string;
}

interface BudgetItem {
  id: number;
  name: string;
  cost: number;
}

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface ScheduleItem {
  id: number;
  time: string;
  activity: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private nextId = 0;

  // Guest List Data Stream
  private guestsSource = new BehaviorSubject<Guest[]>(this.getInitialGuests());
  guests$ = this.guestsSource.asObservable();

  // Vendor Contact Data Stream
  private vendorsSource = new BehaviorSubject<Vendor[]>(this.getInitialVendors());
  vendors$ = this.vendorsSource.asObservable();

  // Budget Planner Data Stream
  private budgetItemsSource = new BehaviorSubject<BudgetItem[]>(this.getInitialBudgetItems());
  budgetItems$ = this.budgetItemsSource.asObservable();

  // Task Checklist Data Stream
  private tasksSource = new BehaviorSubject<Task[]>(this.getInitialTasks());
  tasks$ = this.tasksSource.asObservable();

  // Printable Schedule Data Stream
  private scheduleSource = new BehaviorSubject<ScheduleItem[]>(this.getInitialSchedule());
  schedule$ = this.scheduleSource.asObservable();

  private getUniqueId(): number {
    return this.nextId++;
  }

  // Initial Data
  private getInitialGuests(): Guest[] {
    return [
      { id: this.getUniqueId(), name: 'Jane Doe', rsvp: 'Yes' },
      { id: this.getUniqueId(), name: 'John Smith', rsvp: 'Pending' }
    ];
  }

  private getInitialVendors(): Vendor[] {
    return [
      { id: this.getUniqueId(), name: 'Caterer Co.', contact: '555-1234', service: 'Catering' },
      { id: this.getUniqueId(), name: 'DJ Sound', contact: '555-5678', service: 'Music' }
    ];
  }

  private getInitialBudgetItems(): BudgetItem[] {
    return [
      { id: this.getUniqueId(), name: 'Venue Rental', cost: 2500 },
      { id: this.getUniqueId(), name: 'Catering', cost: 1500 }
    ];
  }

  private getInitialTasks(): Task[] {
    return [
      { id: this.getUniqueId(), name: 'Send out invitations', completed: false },
      { id: this.getUniqueId(), name: 'Book the photographer', completed: true }
    ];
  }

  private getInitialSchedule(): ScheduleItem[] {
    return [
      { id: this.getUniqueId(), time: '10:00 AM', activity: 'Guest Arrival' },
      { id: this.getUniqueId(), time: '11:00 AM', activity: 'Ceremony Begins' }
    ];
  }

  // --- Guest List Methods (CRUD) ---
  addGuest(newGuest: Omit<Guest, 'id'>): void {
    const currentGuests = this.guestsSource.getValue();
    const guestWithId = { ...newGuest, id: this.getUniqueId() };
    this.guestsSource.next([...currentGuests, guestWithId]);
  }

  removeGuest(guestId: number): void {
    const currentGuests = this.guestsSource.getValue();
    const updatedGuests = currentGuests.filter(guest => guest.id !== guestId);
    this.guestsSource.next(updatedGuests);
  }

  updateRsvp(guestId: number, status: 'Yes' | 'No' | 'Pending'): void {
    const guests = this.guestsSource.getValue();
    const guestToUpdate = guests.find(g => g.id === guestId);
    if (guestToUpdate) {
      guestToUpdate.rsvp = status;
      this.guestsSource.next([...guests]);
    }
  }

  getGuestCounts(): Observable<{ total: number, yes: number, no: number, pending: number }> {
    return this.guestsSource.asObservable().pipe(
      map(guests => ({
        total: guests.length,
        yes: guests.filter(g => g.rsvp === 'Yes').length,
        no: guests.filter(g => g.rsvp === 'No').length,
        pending: guests.filter(g => g.rsvp === 'Pending').length
      }))
    );
  }

  // --- Vendor Contact Methods (CRUD) ---
  addVendor(newVendor: Omit<Vendor, 'id'>): void {
    const currentVendors = this.vendorsSource.getValue();
    const vendorWithId = { ...newVendor, id: this.getUniqueId() };
    this.vendorsSource.next([...currentVendors, vendorWithId]);
  }

  removeVendor(vendorId: number): void {
    const currentVendors = this.vendorsSource.getValue();
    const updatedVendors = currentVendors.filter(vendor => vendor.id !== vendorId);
    this.vendorsSource.next(updatedVendors);
  }

  // --- Budget Planner Methods (CRUD) ---
  addBudgetItem(newItem: Omit<BudgetItem, 'id'>): void {
    const currentItems = this.budgetItemsSource.getValue();
    const itemWithId = { ...newItem, id: this.getUniqueId() };
    this.budgetItemsSource.next([...currentItems, itemWithId]);
  }

  removeBudgetItem(budgetItemId: number): void {
    const currentItems = this.budgetItemsSource.getValue();
    const updatedItems = currentItems.filter(item => item.id !== budgetItemId);
    this.budgetItemsSource.next(updatedItems);
  }

  // --- Task Checklist Methods (CRUD) ---
  addTask(newTask: Omit<Task, 'id'>): void {
    const currentTasks = this.tasksSource.getValue();
    const taskWithId = { ...newTask, id: this.getUniqueId() };
    this.tasksSource.next([...currentTasks, taskWithId]);
  }

  toggleCompletion(taskId: number): void {
    const tasks = this.tasksSource.getValue();
    const taskToUpdate = tasks.find(t => t.id === taskId);
    if (taskToUpdate) {
      taskToUpdate.completed = !taskToUpdate.completed;
      this.tasksSource.next([...tasks]);
    }
  }

  removeTask(taskId: number): void {
    const currentTasks = this.tasksSource.getValue();
    const updatedTasks = currentTasks.filter(task => task.id !== taskId);
    this.tasksSource.next(updatedTasks);
  }

  // --- Dashboard Data Method ---
  getDashboardData(): Observable<any> {
    return combineLatest([
        this.guests$,
        this.budgetItems$,
        this.tasks$
    ]).pipe(
        map(([guests, budgetItems, tasks]) => {
            const totalBudget = budgetItems.reduce((sum, item) => sum + item.cost, 0);
            const completedTasks = tasks.filter(task => task.completed).length;
            const taskCompletionPercentage = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;
            return {
                guestCounts: {
                    total: guests.length,
                    yes: guests.filter(g => g.rsvp === 'Yes').length,
                    no: guests.filter(g => g.rsvp === 'No').length,
                    pending: guests.filter(g => g.rsvp === 'Pending').length
                },
                totalBudget: totalBudget,
                taskCompletionPercentage: taskCompletionPercentage
            };
        })
    );
  }
}
