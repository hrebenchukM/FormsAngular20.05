import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { User } from '../form1/User'

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {
  newUser = new User("Irina", 28, "Google")

  users: User[] = [];
  companies: string[] = ["Apple", "Microsoft", "Google", "Jetbrains"];

  addUser(){
      this.users.push({...this.newUser});
  }

}
