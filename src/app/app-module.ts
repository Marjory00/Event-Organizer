import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GuestListManager } from './guest-list-manager/guest-list-manager';
import { VendorContactList } from './vendor-contact-list/vendor-contact-list';
import { BudgetPlanner } from './budget-planner/budget-planner';
import { TaskChecklist } from './task-checklist/task-checklist';
import { PrintableSchedule } from './printable-schedule/printable-schedule';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { AuthGuard } from './auth/auth-guard';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'guests', component: GuestListManager, canActivate: [AuthGuard] },
  { path: 'vendors', component: VendorContactList, canActivate: [AuthGuard] },
  { path: 'budget', component: BudgetPlanner, canActivate: [AuthGuard] },
  { path: 'tasks', component: TaskChecklist, canActivate: [AuthGuard] },
  { path: 'schedule', component: PrintableSchedule, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    BudgetPlanner,

  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
