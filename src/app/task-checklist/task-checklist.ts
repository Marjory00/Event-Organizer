import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-checklist',
  standalone: false,
  templateUrl: './task-checklist.html',
  styleUrls: ['./task-checklist.css']
})
export class TaskChecklist implements OnInit {
  tasks$!: Observable<Task[]>;
  newTaskName: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tasks$ = this.dataService.tasks$;
  }

  addTask(): void {
    if (this.newTaskName.trim()) {
      this.dataService.addTask({ name: this.newTaskName.trim(), completed: false });
      this.newTaskName = '';
    }
  }

  toggleCompletion(id: number): void {
    this.dataService.toggleCompletion(id);
  }

  removeTask(id: number): void {
    this.dataService.removeTask(id);
  }
}
