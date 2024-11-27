import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ProfilepicserviceService } from '../services/profilepicservice.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-studentprofilepic',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './studentprofilepic.component.html',
  styleUrl: './studentprofilepic.component.css'
})
export class StudentprofilepicComponent {
 
  constructor(public router: Router, public profilepicservice:ProfilepicserviceService, private toastr: ToastrService) {}
  
 
  

  imageSrc: string | ArrayBuffer | null = null; // For the image preview
  selectedFile: File | null = null; // Holds the selected file

  // Method to handle file input and update the preview
  handleFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result as string | ArrayBuffer;
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.clearSelection();
    }
}

uploadImage(): void {
  if (this.selectedFile) {
    console.log('Uploading file:', this.selectedFile);

    // Add logic to send the file to your backend via an HTTP request
    // Example:
    // const formData = new FormData();
    // formData.append('file', this.selectedFile);
    // this.http.post('your-backend-url', formData).subscribe({
    //   next: (response) => console.log('Upload successful:', response),
    //   error: (error) => console.error('Upload failed:', error)
    // });

    // this.toastr.success('Image uploaded successfully!', 'Success');
    const imageUrl = URL.createObjectURL(this.selectedFile);
    this.profilepicservice.setProfilePic(imageUrl);

    this.toastr.success('Image uploaded successfully!', 'Success');
    this.clearSelection();
    
    this.router.navigate (['/studentdashboard'])
  }
}

clearSelection(): void {
  this.selectedFile = null;
  this.imageSrc = null;
}
}
