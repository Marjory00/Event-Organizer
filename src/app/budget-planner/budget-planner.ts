import { Component } from '@angular/core';

// Interface for a budget item
interface BudgetItem {
  name: string;
  cost: number;

}
@Component({
  selector: 'app-budget-planner',
  standalone: false,
  templateUrl: './budget-planner.html',
  styleUrl: './budget-planner.css'
})
export class BudgetPlanner {
  // Array to store budget items
  budgetItems: BudgetItem[] = [
    { name: 'Venue Rental', cost: 2500 },
    { name: 'Catering', cost: 1500 }
  ];

// Object for the new budget item form input
newItem = {
  name: '',
  cost: 0
};

// Getter to calculate total cost
get totalCost(): number {
  return this.budgetItems.reduce((total, item) => total + item.cost, 0);
}

// Adds a new budget item to the list
addItem(): void {
  if (this.newItem.name && this.newItem.cost > 0) {
    this.budgetItems.push({ ...this.newItem }); // Use spread operator to create a new object
    this.newItem = { name: '', cost: 0 }; // Reset the form
  }
}
}
