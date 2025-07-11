import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, RouterOutlet, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'Djangular Tareas'; 
}
