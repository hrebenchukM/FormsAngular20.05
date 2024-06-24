import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-react1',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './react1.component.html',
  styleUrl: './react1.component.css'
})
export class React1Component {

  myForm : FormGroup;

  constructor(){
      this.myForm = new FormGroup(
        {

         
          "userEmail": new FormControl("", [Validators.required,Validators.email]),
          "userPassword": new FormControl("", Validators.pattern("[0-9]{11}"))
      });
  }

  submit(){
      console.log(this.myForm);
  }

}
