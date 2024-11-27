import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-studentsignin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './studentsignin.component.html',
  styleUrl: './studentsignin.component.css'
})
export class StudentsigninComponent {
  constructor (public router:Router, public service:LoginserviceService){}
  

  public email = ''
  public password = ''
  public studentarray:any =[]
  public msg =''

  currentstudent:any

ngOnInit(){
  // this.studentarray=JSON.parse(localStorage.getItem('studentarray') || '[]')
  // console.log(this.studentarray)


  // this.currentstudent = this.login.getCurrentStudent();
 
}

  login(){

    const student = this.service.getStudentByEmail(this.email);
    if (student && student.password === this.password) {
      if (student.isActive) {
        this.service.setCurrentStudent(student);
        this.router.navigate(['studentdashboard']);  // Redirect to dashboard or home
      } else {
        this.msg = 'Your account is deactivated. Please contact the admin.';
      }
    } else {
      this.msg = 'Invalid credentials. Please try again.';
    }
  }
    // const student = this.service.getStudentByEmail(this.email);
    
    // if (!student) {
    //   // If student is not found, show an error message and return
    //   this.msg = 'Email not found. Please check the email.';
    //   return;
    // }
    // if (student.password === this.password) {
    //   this.service.setCurrentStudent(student);
    //   // console.log('okayyyy')
    //   this.router.navigate (['studentdashboard'])

      
      
    // } else {
    //   this.msg = 'Incorrect password. Please try again.';
    // }
  }
    // let student = this.studentarray.find((student:any, index:number)=> student.email==this.email && student.password == this.password)
//   if(student){
//   localStorage.setItem('currentstudent', JSON.stringify(student))
// this.router.navigate(['studentdashboard'])
//       console.log(student)
    // }
    // else {

    //   this.msg='Incorrect email or password'
    //   console.log('No record found')
    // }


  

