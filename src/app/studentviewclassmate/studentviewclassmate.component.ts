import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-studentviewclassmate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentviewclassmate.component.html',
  styleUrl: './studentviewclassmate.component.css'
})
export class StudentviewclassmateComponent {

  constructor (public service: LoginserviceService) {}

  classmates: any[] = [];

  ngOnInit() {
    // const userClass = 'jss1'; // Replace with the current user's class
    // this.classmates = this.service.getStudentsByClass(userClass);

    const currentstudent = this.service.getCurrentStudent(); // Directly get the current student
  if (currentstudent && currentstudent.class) {
    const userClass = currentstudent.class; // Use the current user's class
    this.classmates = this.service.getStudentsByClass(userClass); // Get classmates by class
  } else {
    console.error('User class not found!');
  }

}
}
