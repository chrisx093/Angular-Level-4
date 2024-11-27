import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templatevalidation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './templatevalidation.component.html',
  styleUrl: './templatevalidation.component.css'
})
export class TemplatevalidationComponent {
  public firstname =''
  public lastname =''
  public phonenumber = ''
  public age =''
  public checkbox:boolean=false
  // ngOninit(){
  //   this.checkbox = false
  // }


}
