import { Component } from '@angular/core';
import { FormsModule, NgModel } from "@angular/forms";

class User{
  constructor(public name: string,
              public age: number,
              public company: string)
  { }
}

@Component({
  selector: 'app-edit-model',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-model.component.html',
  styleUrl: './edit-model.component.css'
})
export class EditModelComponent {
  user = new User("", 18, "")

  users: User[] = [];
  companies: string[] = ["Apple", "Microsoft", "Google", "Jetbrains"];

  logUser(name: NgModel, age: NgModel, company: NgModel){
      console.log(name);
      console.log(age);
      console.log(company);
  }
}
