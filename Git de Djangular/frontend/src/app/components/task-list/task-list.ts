import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
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

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}
