import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-world.html',
  styleUrls: ['./hello-world.css']
})
export class HelloWorldComponent {
  @Input() nameUser: string = '';

  sayHello(nameUser: string) {
    alert("Hola " + nameUser);
  }
}