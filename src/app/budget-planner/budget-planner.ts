import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataService } from '../data';

// Interface for a budget item
interface BudgetItem {
  id: number;
  name: string;
  cost: number;
  isEditing?: boolean;

}
@Component({
  selector: 'app-budget-planner',
  standalone: false,
  templateUrl: './budget-planner.html',
  styleUrl: './budget-planner.css'
})
export class BudgetPlanner implements OnInit {

  budgetItems$!: Observable<BudgetItem[]>;
  totalCost$!: Observable<number>;
  itemCount$!: Observable<number>;

  newBudgetItem: Omit<BudgetItem, 'id'> = {
    name: '',
    cost: 0
  };

  constructor(private dataService: DataService) { }

   ngOnInit(): void {
    this.budgetItems$ = this.dataService.budgetItems$;
    this.totalCost$ = this.budgetItems$.pipe(
      map(items => items.reduce((sum, item) => sum + item.cost, 0))
    );
    this.itemCount$ = this.budgetItems$.pipe(
      map(items => items.length)
    );
  }

  addBudgetItem(): void {
    if (this.newBudgetItem.name.trim() && this.newBudgetItem.cost > 0) {
      this.dataService.addBudgetItem(this.newBudgetItem);
      this.newBudgetItem = { name: '', cost: 0 };
    }
  }

  removeBudgetItem(id: number): void {
    this.dataService.removeBudgetItem(id);
  }

  // New method to enable editing
  editItem(item: BudgetItem): void {
    item.isEditing = true;
  }

  // New method to save edits
  saveEdit(item: BudgetItem): void {
    if (item.name.trim() && item.cost > 0) {
      this.dataService.updateBudgetItem(item.id, item);
      item.isEditing = false;
    }
  }

  // New method to cancel editing
  cancelEdit(item: BudgetItem): void {
    item.isEditing = false;
    // Optionally, revert changes here if you store a copy
  }

}
