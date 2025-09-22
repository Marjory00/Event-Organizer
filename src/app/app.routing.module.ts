
// Import the Routes type from Angular's router module.
import { Routes } from '@angular/router';

// Import all your standalone components that will be part of the routing.
import { GuestListManager } from './guest-list-manager/guest-list-manager';
import { VendorContactList } from './vendor-contact-list/vendor-contact-list';
import { BudgetPlanner } from './budget-planner/budget-planner';
import { TaskChecklist } from './task-checklist/task-checklist';
import { PrintableSchedule } from './printable-schedule/printable-schedule';

// Define the route configuration array.
export const routes: Routes = [
  // Each object in the array defines a route with a path and a component.
  { path: 'guests', component: GuestListManager },
  { path: 'vendors', component: VendorContactList },
  { path: 'budget', component: BudgetPlanner },
  { path: 'tasks', component: TaskChecklist },
  { path: 'schedule', component: PrintableSchedule },
  // A redirect route to set a default page when the user lands on the root URL.
  { path: '', redirectTo: '/guests', pathMatch: 'full' },
];
