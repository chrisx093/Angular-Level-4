import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-studentviewnotes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './studentviewnotes.component.html',
  styleUrl: './studentviewnotes.component.css'
})
export class StudentviewnotesComponent {

  noteTitle: string = '';
  noteContent: string = '';
  notes: { title: string; content: string }[] = [];
  isEditing: boolean = false; // Tracks if we're editing an existing note
  editingIndex: number | null = null; // Index of the note being edited

  constructor(private service: LoginserviceService) {}

  ngOnInit(): void {
    const currentStudent = this.service.getCurrentStudent();
    if (currentStudent) {
      this.notes = this.service.getNotesByEmail(currentStudent.email);
    }
  }

  // Add or Update Note
  addOrUpdateNote(): void {
    if (this.noteTitle.trim() && this.noteContent.trim()) {
      if (this.isEditing && this.editingIndex !== null) {
        // Update existing note
        this.notes[this.editingIndex] = {
          title: this.noteTitle,
          content: this.noteContent
        };
        this.isEditing = false;
        this.editingIndex = null;
      } else {
        // Add new note
        const currentStudent = this.service.getCurrentStudent();
        if (currentStudent) {
          this.service.addNote(
            currentStudent.email,
            this.noteTitle,
            this.noteContent
          );
          this.notes = this.service.getNotesByEmail(currentStudent.email);
        }
      }

      // Clear form fields
      this.noteTitle = '';
      this.noteContent = '';
    } else {
      alert('Please fill in both the title and content!');
    }
  }

  // Edit Note
  editNote(index: number): void {
    this.isEditing = true;
    this.editingIndex = index;
    this.noteTitle = this.notes[index].title;
    this.noteContent = this.notes[index].content;
  }

  // Delete Note
  deleteNote(index: number): void {
    const currentStudent = this.service.getCurrentStudent();
    if (currentStudent) {
      // Remove the note from the array
      this.notes.splice(index, 1);

      // Update the service notes list
      this.service.notes = this.service.notes.filter(
        (_, i) => i !== index || this.service.notes[i].email !== currentStudent.email
      );
      localStorage.setItem('notes', JSON.stringify(this.service.notes));
    }
  }
}
