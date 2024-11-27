import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contactappedit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactappedit.component.html',
  styleUrl: './contactappedit.component.css'
})
export class ContactappeditComponent {
  contact: any = {}; 
  userContact: any[] = []; 
 

constructor (public actroute:ActivatedRoute, private router: Router){}

public index:number = 0
ngOnInit (){
  this.index=this.actroute.snapshot.params['id']
  console.log (this.index)


  // console.log (this.actroute.snapshot.params['index'])

  this.loadContacts()
  this.contact = this.userContact[this.index]
}

loadContacts() {
  this.userContact = JSON.parse(localStorage.getItem("userArray") || "[]");
}

save() {
  
  this.userContact[this.index] = this.contact;
  localStorage.setItem("userArray", JSON.stringify(this.userContact)); 
  this.router.navigate(['/contact']); 
}
}
