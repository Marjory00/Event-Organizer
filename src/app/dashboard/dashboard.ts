import { Component, OnInit } from '@angular/core';
import { DataService } from '../data';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{

  dashboardData$!: Observable<any>;

  constructor(private dataService: DataService) {}

ngOnInit(): void {
    this.dashboardData$ = combineLatest([
      this.dataService.getGuestCounts(),
      this.dataService.budgetItems$,
      this.dataService.tasks$
    ]).pipe(
      map(([guestCounts, budgetItems, tasks]) => {
        const totalBudget = budgetItems.reduce((sum, item) => sum + item.cost, 0);
        const completedTasks = tasks.filter(task => task.completed).length;
        const totalTasks = tasks.length;
        const taskCompletionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
        return {
          guestCounts,
          totalBudget,
          taskCompletionPercentage
        };
      })
    );
  }
}
