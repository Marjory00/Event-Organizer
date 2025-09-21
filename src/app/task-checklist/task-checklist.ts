import { Component } from '@angular/core';

// Interface for a task item
interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-checklist',
  standalone: false,
  templateUrl: './task-checklist.html',
  styleUrl: './task-checklist.css'
})
export class TaskChecklist {
  // Array to hold the tasks
  tasks: Task[] = [
    { name: 'Send out invitations', completed: false },
    { name: 'Book the photographeer', completed: true }
  ];

  // Property for the new task input
  newTaskName: string = '';

  // Adds a new tasks to the list
  addTask(): void {
    if (this.newTaskName.trim()) {
      this.tasks.push({ name: this.newTaskName, completed: false });
      this.newTaskName = ''; // Reset the input field
    }
  }

  // Toggle the completion status of a task
  toggleCompletion(task: Task): void {
    task.completed = !task.completed;
  }
}
