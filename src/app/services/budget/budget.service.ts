import { Injectable } from '@angular/core';
import { BudgetItem } from '../../models/budget/budget-item.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private budgetItems: BudgetItem[] = [
    { id: 1, category: 'Venue', name: 'Venue Rental', cost: 5000 },
    { id: 2, category: 'Catering', name: 'Catering per person', cost: 1500 },
    { id: 3, category: 'Music', name: 'DJ Service', cost: 800 }
  ];

  private nextId = 4;

  getBudgetItems(): BudgetItem[] {
    return this.budgetItems;
  }

  addBudgetItem(newItem: { category: string; name: string; cost: number }): void {
    const newItemWithId: BudgetItem = {
      id: this.nextId++,
      category: newItem.category,
      name: newItem.name,
      cost: newItem.cost
    };
    this.budgetItems.push(newItemWithId);
  }

  deleteBudgetItem(id: number): void {
    this.budgetItems = this.budgetItems.filter(item => item.id !== id);
  }
}
