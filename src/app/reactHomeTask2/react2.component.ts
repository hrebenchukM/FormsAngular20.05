import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup,
  FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
  import { CommonModule} from "@angular/common";
@Component({
  selector: 'app-react2',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './react2.component.html',
  styleUrl: './react2.component.css'
})
export class React2Component {

  myForm : FormGroup;
  constructor(private formBuilder: FormBuilder){

      this.myForm = formBuilder.group({
          "userPassword": ["", Validators.pattern("[0-9]{11}")],
          "userEmail": ["", [ Validators.required, Validators.email]],
          "agreeTerms": [false, Validators.requiredTrue],
          "hobbies": formBuilder.array([[""]])
      });
  }
  getFormsControls() : FormArray{
      return this.myForm.controls["hobbies"] as FormArray;
  }
  addHobby(){
      (<FormArray>this.myForm.controls["hobbies"]).push(new FormControl("", Validators.required));
  }
  submit(){
      console.log(this.myForm);

      this.myForm.reset({
        email: '',
        password: '',
        checkbox: false,
        hobbies: ['']
      });
   
  }

}
