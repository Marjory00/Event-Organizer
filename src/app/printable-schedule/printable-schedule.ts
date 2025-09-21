import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data';

interface ScheduleItem {
  id: number;
  time: string;
  activity: string;
}

@Component({
  selector: 'app-printable-schedule',
  standalone: false,
  templateUrl: './printable-schedule.html',
  styleUrls: ['./printable-schedule.css']
})
export class PrintableSchedule {
  schedule$!: Observable<ScheduleItem[]>;

  constructor(private dataService: DataService) {
    this.schedule$ = this.dataService.schedule$;
  }

  printSchedule(): void {
    window.print();
  }
}
