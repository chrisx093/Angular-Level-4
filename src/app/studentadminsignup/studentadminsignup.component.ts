import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentadminsignup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './studentadminsignup.component.html',
  styleUrl: './studentadminsignup.component.css'
})
export class StudentadminsignupComponent {
  constructor (public router:Router) {}

  public fullname =''
  public email = ''
  public password =''
  public phonenumber =''

  adminarray: any [] = []


  signup(){
    let adminobj = {
      fullname: this.fullname,
      email: this.email,
      password: this.password,
      phonenumber:this.phonenumber
    }

    let adminarray = JSON.parse(localStorage.getItem('adminarray') || '[]');
    adminarray.push(adminobj);

    // Save the updated array to localStorage
    localStorage.setItem('adminarray', JSON.stringify(adminarray));
  
    // Navigate to the sign-in page after successful signup
    this.router.navigate(['studentadminsignin']);
    
    

  }

}
