import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { GuestListManager } from './guest-list-manager/guest-list-manager';
import { VendorContactList } from './vendor-contact-list/vendor-contact-list';
import { BudgetPlanner } from './budget-planner/budget-planner';
import { TaskChecklist } from './task-checklist/task-checklist';
import { PrintableSchedule } from './printable-schedule/printable-schedule';
import { Calendar } from './calendar/calendar';
import { Login } from './login/login';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'guests', component: GuestListManager, canActivate: [AuthGuard] },
  { path: 'vendors', component: VendorContactList, canActivate: [AuthGuard] },
  { path: 'budget', component: BudgetPlanner, canActivate: [AuthGuard] },
  { path: 'tasks', component: TaskChecklist, canActivate: [AuthGuard] },
  { path: 'schedule', component: PrintableSchedule, canActivate: [AuthGuard] },
  { path: 'calendar', component: Calendar, canActivate: [AuthGuard] },
  { path: 'login', component: Login },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
