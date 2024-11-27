import { Component } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProfilepicserviceService } from '../services/profilepicservice.service';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-studentdashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './studentdashboard.component.html',
  styleUrl: './studentdashboard.component.css'
})
export class StudentdashboardComponent {
  constructor (public service:LoginserviceService, public router:Router, public profilepicservice:ProfilepicserviceService, public toastr: ToastrService){}

 
  profilePic: string | null = null;
  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  resetPasswordData() {
    this.passwordData = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    };

  
  }

  currentstudent:any
  ngOnInit() {

    this.currentstudent = this.service.getCurrentStudent();

    
    this.profilepicservice.profilePic$.subscribe((pic) => {
      this.profilePic = pic;
    });
    // this.currentstudent = this.login.getCurrentStudent();
    // this.profilepicservice.profilePic$.subscribe((pic) => {
    //   this.profilePic = pic;
    // })
  }
 

  // getCurrentStudent() {
  //   const studentData = localStorage.getItem('currentstudent');
  //   return studentData ? JSON.parse(studentData) : null;
  // }

  logout() {
    this.service.setCurrentStudent(null);  // Clear the current student in the service
    this.router.navigate(['/']);
    // localStorage.removeItem('currentstudent');  
    // this.router.navigate(['/']);  
  }

  onUpdatePassword() {

    
    const { currentPassword, newPassword, confirmPassword } = this.passwordData;
    const storedPassword = this.currentstudent.password

    if (currentPassword !== storedPassword) {
      this.toastr.error('The current password is incorrect!','Error', {
        timeOut: 5000, // Duration the message will stay visible (in ms)
        positionClass: 'toast-top-left', // Position of the toast message on screen
        closeButton: false, // Display a close button
        progressBar: true, // Show a progress bar
        tapToDismiss: true, // Dismiss on tap
        easing: 'ease-in', // Animation easing
        extendedTimeOut: 1000, // Time before toast disappears after mouse hover
        toastClass: 'toast-error-custom'
        // iconClass: 'toast-error' // Icon class for the error message
      })
      
      return;
    }
   
    if (newPassword !== confirmPassword) {
      alert('New Password and Confirm Password do not match!');
      return;
    }
  
   
    this.currentstudent.password = newPassword;

    let studentarray = JSON.parse(localStorage.getItem('studentarray')!);

    let studentIndex = studentarray.findIndex((student: any) => student.email === this.currentstudent.email);
    if (studentIndex !== -1) {
      studentarray[studentIndex].password = newPassword;
    }
    localStorage.setItem('studentarray', JSON.stringify(studentarray));
    localStorage.setItem('currentstudent', JSON.stringify(this.currentstudent));

   
    console.log('Password Update Initiated:', {
      currentPassword,
      newPassword,
    });
  
   
   
  
    this.toastr.success('Password changed succesfully','Success', {
      timeOut: 5000, // Duration the message will stay visible (in ms)
      positionClass: 'toast-top-left', // Position of the toast message on screen
      closeButton: false, // Display a close button
      progressBar: true, // Show a progress bar
      tapToDismiss: true, // Dismiss on tap
      easing: 'ease-in', // Animation easing
      extendedTimeOut: 1000, // Time before toast disappears after mouse hover
      toastClass: 'toast-success-custom'

      // iconClass: 'toast-error' // Icon class for the error message
    })
  }

  navigateToProfilePic() {
    this.router.navigate(['/studentdashboard/studentprofilepic']);
  }

  editprofile() {
    // this.router.navigate(['/studentdashboard/studenteditprofile']);
    this.router.navigate(['/studentdashboard/studenteditprofile']);
  }

  viewclassmate() {
    this.router.navigate(['/studentdashboard/studentviewclassmate']);
  }

  addcourse() {
    this.router.navigate(['/studentdashboard/studentaddcourse']);
  }

  viewnotes() {
    this.router.navigate(['/studentdashboard/studentviewnotes']);
  }
}

