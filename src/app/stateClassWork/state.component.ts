import { Component } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { CommonModule} from "@angular/common";
class User{
    constructor( public email: string,
      public password: string){}
}
@Component({
  selector: 'app-state',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {
  user: User = new User("", "");
  addUser(){
      console.log(this.user);
  }

}
