import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data';

interface ScheduleItem {
  id: number;
  time: string;
  activity: string;
}

@Component({
  selector: 'app-calendar',
  standalone: false,
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.css']
})
export class Calendar {
  schedule$!: Observable<ScheduleItem[]>;

  constructor(private dataService: DataService) {
    this.schedule$ = this.dataService.schedule$;
  }
}
