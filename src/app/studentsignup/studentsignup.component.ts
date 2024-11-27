import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-studentsignup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './studentsignup.component.html',
  styleUrl: './studentsignup.component.css'
})
export class StudentsignupComponent {
  constructor (public router:Router, public service:LoginserviceService){}

  public fullname = ''
  public email =''
  public password=''
  public phonenumber =''
  public class = ''
  public dept =''

  public errorMessage = ''

  

  // public studentarray:any[] =[]

  ngOnInit(){
    // if (localStorage['studentarray']){
    //   this.studentarray=JSON.parse(localStorage.getItem('studentarray') || '[]')
    // }
  }
  

  signup(){
    const studentobj = {
      fullname: this.fullname,
      email: this.email,
      password: this.password,
      phonenumber: this.phonenumber,
      class: this.class,
      dept: this.dept,
    };

    const isSuccess: boolean = this.service.signup(studentobj);  

    if (!isSuccess) {
      // If signup fails (email already exists), show the error message
      this.errorMessage = 'Email already exists. Please use a different email.';
      return; // Stop further execution
    }
   
      // Clear input fields after signup
      this.fullname = '';
      this.email = '';
      this.password = '';
      this.phonenumber = '';
      this.class = '';
      this.dept = '';

      // console.log( studentobj)
      this.router.navigate (['studentsignin'])


    // let studentobj = {
    //   fullname: this.fullname,
    //   email: this.email,
    //   password: this.password,
    //   phonenumber:this.phonenumber
    // }

    // console.log (studentobj)
    // this.studentarray.push(studentobj)
    // localStorage.setItem('studentarray', JSON.stringify(this.studentarray))
    
    

  }

  // checkemail(){
  //   let studentobj = {
  //     fullname: this.fullname,
  //     email: this.email,
  //     password: this.password,
  //     phonenumber:this.phonenumber
  //   }

  //   this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)

  //   this.studentarray.email.find(this.email)

  //   if (this.studentarray.email = this.email) {
  //     console.log('found')
      
  //   } else {
      
  //   }
    
  // }

}
