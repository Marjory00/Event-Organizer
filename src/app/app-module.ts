import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { GuestListManager } from './guest-list-manager/guest-list-manager';
import { VendorContactList } from './vendor-contact-list/vendor-contact-list';
import { BudgetPlanner } from './budget-planner/budget-planner';
import { TaskChecklist } from './task-checklist/task-checklist';
import { FormsModule } from '@angular/forms';
import { PrintableSchedule } from './printable-schedule/printable-schedule';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { DataService } from './data';
import { Dashboard } from './dashboard/dashboard';
import { Calendar } from './calendar/calendar';

import { Toast } from './toast';
import { ToastComponent } from './toast/toast';
import { Modal } from './modal/modal';


@NgModule({
  declarations: [
    App,
    GuestListManager,
    VendorContactList,
    BudgetPlanner,
    TaskChecklist,
    PrintableSchedule,
    Dashboard,
    Calendar,
    ToastComponent,
    Modal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimations(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    DataService
  ],
  bootstrap: [App]
})
export class AppModule { }
