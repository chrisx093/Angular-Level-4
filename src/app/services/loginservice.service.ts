import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  public studentarray: any[] = [];
  public studentobj = {
    fullname: '',
    email: '',
    password: '',
    phonenumber: '',
    class: '',
    dept: '',
    isActive: true
  };

  public currentstudent: any = null;
  public courses: string[] = [];
  public defaultCourses: string[] = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'English Literature',
    'History',
    'Geography',
    'Economics',
    'Political Science'
  ]; // Default list of courses

  constructor() {
    const savedStudents = localStorage.getItem('studentarray');
    if (savedStudents) {
      this.studentarray = JSON.parse(savedStudents);
    }

    const savedCurrentStudent = localStorage.getItem('currentstudent');
    if (savedCurrentStudent) {
      this.currentstudent = JSON.parse(savedCurrentStudent);
    }

    const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    this.notes = JSON.parse(savedNotes);
  }
  }


  signup(studentobj: any): boolean {

    const existingStudent = this.getStudentByEmail(studentobj.email);
    if (existingStudent) {
      return false; // Email exists, return false to indicate failure
    }
    studentobj.isActive = true;  // Set new account to active by default
    this.studentarray.push(studentobj);
    localStorage.setItem('studentarray', JSON.stringify(this.studentarray));
    return true;
  


    this.studentarray.push(studentobj);
    localStorage.setItem('studentarray', JSON.stringify(this.studentarray));
    return true;
  }

  // Get all students
  getStudents(): any[] {
    return this.studentarray;
  }

  // Get a specific student by some identifier (e.g., email or ID)
  getStudentByEmail(email: string): any {
    return this.studentarray.find(student => student.email === email);
  }

  // Clear all students (optional utility)
  clearStudents(): void {
    this.studentarray = [];
  }

  setCurrentStudent(student: any): void {
    this.currentstudent = student;
    localStorage.setItem('currentstudent', JSON.stringify(student)); // Optionally, store it in localStorage
  }

  // Method to get the current student
  getCurrentStudent(): any {
    return this.currentstudent;
  }

  getStudentsByClass(className: string) {
    return this.studentarray.filter(student => student.class === className);
}




// Edit an existing course
editCourse(oldCourse: string, newCourse: string): boolean {
  const courseIndex = this.courses.indexOf(oldCourse);
  if (courseIndex !== -1 && !this.courses.includes(newCourse)) {
    this.courses[courseIndex] = newCourse;
    return true;
  }
  return false; // Either the old course doesn't exist, or the new course already exists
}




 

  // Add a course
  addCourse(course: string): boolean {
    if (this.courses.includes(course)) {
      return false; // Course already added
    }
    this.courses.push(course);
    return true;
  }

  // Delete a course
  deleteCourse(course: string): boolean {
    const courseIndex = this.courses.indexOf(course);
    if (courseIndex !== -1) {
      this.courses.splice(courseIndex, 1);
      return true;
    }
    return false; // Course not found
  }

  // Get user-selected courses
  getCourses(): string[] {
    return this.courses;
  }

  // Get default courses
  getDefaultCourses(): string[] {
    return this.defaultCourses;
  }

  public notes: { email: string; title: string; content: string }[] = [];

  addNote(email: string, title: string, content: string): void {
    this.notes.push({ email, title, content });
    localStorage.setItem('notes', JSON.stringify(this.notes)); // Persist notes
  }
  
  // Get all notes for a specific student
  getNotesByEmail(email: string): { title: string; content: string }[] {
    return this.notes.filter(note => note.email === email);
  }




  // Method to activate or deactivate a student's account
  toggleStudentStatus(email: string): void {
    const student = this.getStudentByEmail(email);
    if (student) {
      student.isActive = !student.isActive;
      localStorage.setItem('studentarray', JSON.stringify(this.studentarray));
    }
  }

  // Method to check if the student's account is active
  isStudentActive(email: string): boolean {
    const student = this.getStudentByEmail(email);
    return student ? student.isActive : false;
  }
  

}
