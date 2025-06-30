import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HelloWorldComponent 
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'my-dream-app';
  name: string;
  email: string;
  webpage: string;
  hobbies: string[];
  users: string[];

  constructor() {
    console.log("Constructor working...");
    this.name = "Tu Nombre";
    this.email = "tu@email.com";
    this.webpage = "http://www.tusitio.com";
    this.hobbies = ["Fútbol", "Programación", "Netflix"];
    this.users = ['ryan', 'joe', 'cameron', 'john'];
  }

  showhobbies() {
    return true;
  }

  newHobby(hobby: any) {
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }

  deleteUser(user: string) {
    this.users = this.users.filter(u => u !== user);
  }

  addUser(newUser: any) {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }
}