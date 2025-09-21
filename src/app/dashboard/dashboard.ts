import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {
  dashboardData$!: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dashboardData$ = this.dataService.getDashboardData();
  }
}
