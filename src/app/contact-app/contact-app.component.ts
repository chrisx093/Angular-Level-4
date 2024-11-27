import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-app',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './contact-app.component.html',
  styleUrl: './contact-app.component.css'
})
export class ContactAppComponent {
  constructor (public route:Router, ){}

  public firstname:string = ''
  public lastname:string=''
  public email:string =''
  public phonenumber:string =''
  public userContact:any =""
  public contactDetails: any;


  contactobj: { Firstname: string; Lastname: string; Email: string; Phonenumber: string } | null= null

  create(){
    if (this.firstname== '' || this.lastname=='' || this.email =='' ||this.phonenumber =='')
    {alert ('Some details is missing')}
    else {
    
    
     let storedcontact = JSON.parse(localStorage.getItem("userArray") || "[]")
    let contactObj ={
      Firstname:this.firstname,
      Lastname:this.lastname,
      Email:this.email,
      Phonenumber:this.phonenumber
    }
    storedcontact.push(contactObj)
    console.log(this.userContact)
    localStorage.setItem("userArray", JSON.stringify(storedcontact))
    this.userContact = storedcontact
 
    this.resetFields()
  }
}
  resetFields() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.phonenumber = '';
  }

  ngOnInit(){
    const storedcontact = localStorage.getItem("userArray")
    if (storedcontact){
      this.userContact = JSON.parse(storedcontact)

    }
    
    // const contactIndex = +this.route.snapshot.paramMap.get('i');
    // if (!isNaN(contactIndex) && this.userContact[contactIndex]) {
    //   this.contactDetails = this.userContact[contactIndex];
    // }
  }

  deletee(index: number){
    // this.contactobj = null
    
    // localStorage.setItem('contactobj', JSON.stringify(this.contactobj))

    this.userContact.splice (index, 1)
    localStorage.setItem('userArray', JSON.stringify(this.userContact))

  }

  viewcontact(i:number){
    localStorage.setItem ('viewobject', JSON.stringify(this.userContact[i]))
    console.log (localStorage['viewobject'])
    
  }
  check(){
    this.route.navigate([''])
  }

  edit(i: any){
    this.route.navigate(['edit', i])

  }

  
}

