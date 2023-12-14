import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  title = 'todoapp';
  tasks = ['Instalar el Angular CLI', 'Crear proyecto', 'Crear componentes'];
  name = 'Efrain';
  edad = 40;
  disabled = false;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Efrain',
    edad: 40,
    disabled: false,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  };
}
