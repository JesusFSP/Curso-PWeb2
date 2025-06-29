import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name: string;
  email: string;
  webpage: string;
  hobbies: string[];
  showHobbies: boolean = false;
  users: string[] = ['ryan', 'joe', 'cameron', 'john'];

  constructor() {
    console.log("Constructor working...");
    this.name = "Carlo Jose Luis";
    this.email = "ccorrales@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol", "Programacion", "Netflix"];
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby: HTMLInputElement) {
    if (hobby.value.trim() !== '') {
      this.hobbies.push(hobby.value.trim());
      hobby.value = "";
    }
    return false;
  }

  deleteHobby(index: number) {
    this.hobbies.splice(index, 1);
  }

  addUser(newUser: HTMLInputElement) {
    if (newUser.value.trim() !== '') {
      this.users.push(newUser.value.trim());
      newUser.value = '';
      newUser.focus();
    }
    return false;
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}