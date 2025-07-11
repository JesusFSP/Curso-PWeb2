import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../../services/task';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    HttpClientModule, 
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTaskTitle = '';

  constructor(private taskService: TaskService) {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

  addTask() {
    if (!this.newTaskTitle.trim()) return;
    const newTask: Task = { title: this.newTaskTitle, completed: false };
    this.taskService.addTask(newTask).subscribe(() => {
      this.newTaskTitle = '';
      this.loadTasks();
    });
  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe();
  }

  deleteTask(id: number | undefined) {
    if (!id) return;
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}
