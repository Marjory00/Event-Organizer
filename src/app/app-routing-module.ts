import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestListManager } from './guest-list-manager/guest-list-manager';
import { VendorContactList } from './vendor-contact-list/vendor-contact-list';
import { BudgetPlanner } from './budget-planner/budget-planner';
import { TaskChecklist } from './task-checklist/task-checklist';


const routes: Routes = [
  { path: 'guests', component: GuestListManager },
  { path: 'vendors', component: VendorContactList },
  { path: 'budget', component: BudgetPlanner },
  { path: 'tasks', component: TaskChecklist },
  { path: '', redirectTo: '/guests', pathMatch: 'full' } // Default route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
