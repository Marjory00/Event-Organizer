import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BudgetService } from '../services/budget/budget.service';
import { BudgetItem } from '../models/budget/budget-item.model';

@Component({
  selector: 'app-budget-planner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [BudgetService], //  Add the service here to make it available to the component.
  templateUrl: './budget-planner.html',
  styleUrls: ['./budget-planner.css']
})
export class BudgetPlanner implements OnInit {
  budgetItems: BudgetItem[] = [];
  newItem = {
    category: '',
    name: '',
    cost: 0
  };

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetItems = this.budgetService.getBudgetItems();
  }

  get totalCost(): number {
    return this.budgetItems.reduce((total, item) => total + item.cost, 0);
  }

  addItem(): void {
    if (this.newItem.name && this.newItem.cost > 0) {
      this.budgetService.addBudgetItem(this.newItem);
      this.budgetItems = this.budgetService.getBudgetItems();
      this.newItem = { category: '', name: '', cost: 0 };
    }
  }

  deleteItem(id: number): void {
    this.budgetService.deleteBudgetItem(id);
    this.budgetItems = this.budgetService.getBudgetItems();
  }
}
