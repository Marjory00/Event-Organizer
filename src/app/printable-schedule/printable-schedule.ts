import { Component } from '@angular/core';


// Interface for a schedule item
interface ScheduleItem {
  time: string;
  activity: string;
}

@Component({
  selector: 'app-printable-schedule',
  standalone: false,
  templateUrl: './printable-schedule.html',
  styleUrl: './printable-schedule.css'
})

export class PrintableSchedule {
  schedule: ScheduleItem[] = [
    { time: '10:00 AM', activity: 'Guest Arrival' },
    { time: '11:00 AM', activity: 'Ceremony Begins' },
    { time: '12:00 PM', activity: 'Cocktail Hour' },
    { time: '1:00 PM', activity: 'Reception Begins' },
    { time: '4:00 PM', activity: 'Speeches' }
  ];

  // Method to trigger the print dialog
  printSchedule(): void {
    window.print();
  }
}
