import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { Form1Component } from './form1/form1.component';
import { EditModelComponent } from './edit-model/edit-model.component';
import { StateComponent } from './stateClassWork/state.component';
import { FormsComponent } from './forms/forms.component';
import { React1Component } from './reactHomeTask1/react1.component';
import { React2Component } from './reactHomeTask2/react2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,Form1Component,EditModelComponent,StateComponent,FormsComponent,React1Component,React2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Forms';

}

/*
Для представления данных здесь определен класс User, в котором есть три свойства. Класс компонента содержит массив объектов User. С помощью метода addUser() в этот массив добавляется новый объект.

Для добавления данных в шаблоне определены три поля ввода. В каждом поле определены директивы типа [(ngModel)]="name". Тем самым фактически определяются некоторые значения, которые привязаны к этим полям. В обработчике нажатия кнопки вызывается метод addUser(), в который передаются эти значения.
*/
