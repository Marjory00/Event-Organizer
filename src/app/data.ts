// removed misplaced method at top of file
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Vendor {
  id: number;
  name: string;
  contact: string;
  service: string;
}

export interface BudgetItem {
  id: number;
  name: string;
  cost: number;
  isEditing?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Guest management for GuestListManager
  private _guests$ = new BehaviorSubject<any[]>([]);
  get guests$(): Observable<any[]> {
    return this._guests$.asObservable();
  }
  addGuest(guest: any) {
    const guests = this._guests$.value;
    this._guests$.next([...guests, { ...guest, id: Date.now() }]);
  }
  removeGuest(id: number) {
    const guests = this._guests$.value.filter((g: any) => g.id !== id);
    this._guests$.next(guests);
  }
  updateGuestRsvp(id: number, rsvp: string) {
    const guests = this._guests$.value.map((g: any) => g.id === id ? { ...g, rsvp } : g);
    this._guests$.next(guests);
  }
  getGuestCounts(): Observable<{ total: number; yes: number; no: number; pending: number }> {
    return this.guests$.pipe(
      map((guests: any[]) => ({
        total: guests.length,
        yes: guests.filter((g: any) => g.rsvp === 'Yes').length,
        no: guests.filter((g: any) => g.rsvp === 'No').length,
        pending: guests.filter((g: any) => g.rsvp === 'Pending').length
      }))
    );
  }
  // Stub for schedule$
  private _schedule$ = new BehaviorSubject<any[]>([]);
  get schedule$(): Observable<any[]> {
    return this._schedule$.asObservable();
  }

  // Stub for tasks$
  private _tasks$ = new BehaviorSubject<any[]>([]);
  get tasks$(): Observable<any[]> {
    return this._tasks$.asObservable();
  }

  // Stub for addTask
  addTask(task: any) {
    const tasks = this._tasks$.value;
    this._tasks$.next([...tasks, { ...task, id: Date.now() }]);
  }

  // Stub for toggleCompletion
  toggleCompletion(id: number) {
    const tasks = this._tasks$.value.map((t: any) => t.id === id ? { ...t, completed: !t.completed } : t);
    this._tasks$.next(tasks);
  }

  // Stub for removeTask
  removeTask(id: number) {
    const tasks = this._tasks$.value.filter((t: any) => t.id !== id);
    this._tasks$.next(tasks);
  }

  // Stub for getDashboardData
  getDashboardData(): Observable<any> {
    return of({});
  }
  updateBudgetItem(id: number, updated: BudgetItem) {
    const items = this._budgetItems$.value.map((i: BudgetItem) => i.id === id ? { ...updated } : i);
    this._budgetItems$.next(items);
  }
  private _vendors$ = new BehaviorSubject<Vendor[]>([]);
  private _budgetItems$ = new BehaviorSubject<BudgetItem[]>([]);

  get vendors$(): Observable<Vendor[]> {
    return this._vendors$.asObservable();
  }

  get budgetItems$(): Observable<BudgetItem[]> {
    return this._budgetItems$.asObservable();
  }

  addVendor(vendor: Omit<Vendor, 'id'>) {
    const vendors = this._vendors$.value;
    this._vendors$.next([...vendors, { ...vendor, id: Date.now() }]);
  }

  removeVendor(id: number) {
    const vendors = this._vendors$.value.filter(v => v.id !== id);
    this._vendors$.next(vendors);
  }

  addBudgetItem(item: Omit<BudgetItem, 'id'>) {
    const items = this._budgetItems$.value;
    this._budgetItems$.next([...items, { ...item, id: Date.now() }]);
  }

  removeBudgetItem(id: number) {
    const items = this._budgetItems$.value.filter(i => i.id !== id);
    this._budgetItems$.next(items);
  }

  getGuestListData(): Observable<any[]> {
    // Replace with actual HTTP call if needed
    const mockGuests = [
      { name: 'Alice', role: 'Bride' },
      { name: 'Bob', role: 'Groom' },
      { name: 'Charlie', role: 'Guest' }
    ];
    return of(mockGuests); //  Simulates an observable stream
  }
}
