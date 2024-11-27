import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-studenteditprofile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './studenteditprofile.component.html',
  styleUrl: './studenteditprofile.component.css'
})
export class StudenteditprofileComponent {


  currentstudent: any = {};  // Assuming you're storing the student info

  constructor(private router: Router, public service:LoginserviceService) {}

  ngOnInit(): void {
    // Get current student from service
    this.currentstudent = this.service.getCurrentStudent();
    if (this.currentstudent) {
      console.log(this.currentstudent);
    } else {
      console.log('No student data found.');
    }
  }

  onSave(): void {
    // Save the updated student info using the service
    this.service.setCurrentStudent(this.currentstudent);

    let students = this.service.getStudents();
  const studentIndex = students.findIndex(student => student.email === this.currentstudent.email);
  
  if (studentIndex !== -1) {
    students[studentIndex] = this.currentstudent; // Update the student in the array
    localStorage.setItem('studentarray', JSON.stringify(students)); // Save the updated array in localStorage
  }
    // Optionally, navigate to another page after saving
    this.router.navigate(['/studentdashboard']);
  }

  
}
