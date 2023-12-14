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
  age = 40;
  disabled = false;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Efrain',
    age: 40,
    disabled: false,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  };

  clickHandker() {
    alert('Hola');
  }

  changeHandler(event: Event) {
    console.log(event);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    console.log(input.value);
  }

  valueInput = '';

  changeTextKeyboard(event: KeyboardEvent) {
    const elementInput = event.target as HTMLInputElement;
    this.valueInput = elementInput.value;
  }
}
