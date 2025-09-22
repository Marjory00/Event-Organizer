import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestListManager } from './guest-list-manager/guest-list-manager';
import { VendorContactList } from './vendor-contact-list/vendor-contact-list';
import { BudgetPlanner } from './budget-planner/budget-planner';
import { TaskChecklist } from './task-checklist/task-checklist';
import { PrintableSchedule } from './printable-schedule/printable-schedule';


const routes: Routes = [
  { path: 'guests', component: GuestListManager },
  { path: 'vendors', component: VendorContactList },
  { path: 'budget', component: BudgetPlanner },
  { path: 'tasks', component: TaskChecklist },
  { path: 'schedule', component: PrintableSchedule },
  { path: '', redirectTo: '/guests', pathMatch: 'full' } // Default route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
