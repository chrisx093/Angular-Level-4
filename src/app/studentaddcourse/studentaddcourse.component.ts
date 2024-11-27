import { Component } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentaddcourse',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './studentaddcourse.component.html',
  styleUrl: './studentaddcourse.component.css'
})
export class StudentaddcourseComponent {

  defaultCourses: string[] = [];
  courses: string[] = [];

  constructor(private service: LoginserviceService) {
    this.defaultCourses = this.service.getDefaultCourses();
    this.courses = this.service.getCourses();
  }

  addCourse(course: string): void {
    const success = this.service.addCourse(course);
    if (success) {
      this.courses = this.service.getCourses();
    } else {
      alert('This course is already selected!');
    }
  }

  deleteCourse(course: string): void {
    const success = this.service.deleteCourse(course);
    if (success) {
      this.courses = this.service.getCourses();
    } else {
      alert('Failed to remove course!');
    }
  }

  isCourseSelected(course: string): boolean {
    return this.courses.includes(course);
  }
}
