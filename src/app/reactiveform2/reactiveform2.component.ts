import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-reactiveform2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, FormsModule],
  templateUrl: './reactiveform2.component.html',
  styleUrl: './reactiveform2.component.css'
})
export class Reactiveform2Component {
   public data:any []= []
    public isEditModalOpen = false;
  public currentItem: any = {};
  public currentIndex: number | null = null;

formtwo:FormGroup
constructor (public build:FormBuilder, public route:Router){
  this.formtwo= this.build.group({
    title:'',
    desc:'',
    createdat: new Date().toLocaleString()

   

  })

  
}


ngOnInit() {
 
  const savedData = localStorage.getItem('dataArray');
  if (savedData) {
    this.data = JSON.parse(savedData) || [];
  }
}
submit(){
  if( this.formtwo.value.title =='' || this.formtwo.value.desc == '') {
    Swal.fire({
      icon: 'warning',
      title: 'Incomplete Details',
      text: 'Please fill up all details before submitting.',
      confirmButtonColor: '#28a745',
    })
  }
  else{
  this.data.push (this.formtwo.value)
  // console.log (this.data)
  

  localStorage.setItem('dataArray', JSON.stringify(this.data||[]))

  this.formtwo.reset()
}
}

view(i:any){

  
  localStorage.setItem('arrayIndex', JSON.stringify(this.data[i]));
  console.log (this.data[i])
  this.route.navigate([`/reactiveform2/${i}`])

}

del(i:number){

  this.data.splice (i, 1)
  localStorage.setItem ('dataArray', JSON.stringify(this.data || []))
}


// Opens the edit modal with the selected item's data
edit(i: number) {
  this.currentIndex = i;
  this.currentItem = { ...this.data[i] }; // Clone the item to avoid two-way binding issues
  this.isEditModalOpen = true;
}

// Saves the changes to the data array and localStorage, then closes the modal
saveEdit() {
  if (this.currentIndex !== null) {
    this.data[this.currentIndex] = this.currentItem;
    localStorage.setItem('dataArray', JSON.stringify(this.data));
  }
  this.closeModal();
}

// Closes the modal without saving changes
closeModal() {
  this.isEditModalOpen = false;
  this.currentItem = {};
  this.currentIndex = null;
}
}
 


