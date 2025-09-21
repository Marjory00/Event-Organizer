import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { GuestListManager } from './guest-list-manager/guest-list-manager';
import { VendorContactList } from './vendor-contact-list/vendor-contact-list';
import { BudgetPlanner } from './budget-planner/budget-planner';
import { TaskChecklist } from './task-checklist/task-checklist';
import { PrintableSchedule } from './printable-schedule/printable-schedule';
import { DataService } from './data';
import { Dashboard } from './dashboard/dashboard';
import { Calendar } from './calendar/calendar';
import { Modal } from './modal/modal';
import { Login } from './login/login';
import { AuthService } from './auth/auth.service';
import { Toast } from './toast/toast';
import { AuthGuard } from './auth/auth-guard';

@NgModule({
  declarations: [
    App,
  VendorContactList,
  TaskChecklist,
  PrintableSchedule,
  Dashboard,
  Calendar,
  Modal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    GuestListManager,
    BudgetPlanner,
    Toast
  ],
  providers: [
    DataService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [App]
})
export class AppModule { }
