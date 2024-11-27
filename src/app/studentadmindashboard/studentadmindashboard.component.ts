import { Component } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentadmindashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentadmindashboard.component.html',
  styleUrl: './studentadmindashboard.component.css'
})
export class StudentadmindashboardComponent {

  students: any[] = [];

  constructor(private service: LoginserviceService) {}

  ngOnInit(): void {
    this.students = this.service.getStudents();  // Get all students from the service
  }

  // Toggle student account status
  toggleStatus(student: any): void {
    this.service.toggleStudentStatus(student.email);
    student.isActive = !student.isActive;  // Update the local state
  }
}
