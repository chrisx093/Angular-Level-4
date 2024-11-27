import { Component, inject } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {

 

  public _formBuilder = inject(FormBuilder);

 

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
  });
  
  secondFormGroup = this._formBuilder.group({
    kinname: ['', Validators.required],
    kinage: ['', Validators.required],
    kinemail: ['', Validators.required],
    relation: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    street: ['', Validators.required],
    zipcode: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
  });


  
  isLinear = false;

  submit() {
    const combinedData = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
      ...this.thirdFormGroup.value,
    };

    console.log('Combined Data:', combinedData);
  }

}
