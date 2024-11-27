import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-viewcontact',
  standalone: true,
  imports: [],
  templateUrl: './viewcontact.component.html',
  styleUrl: './viewcontact.component.css'
})
export class ViewcontactComponent {

  constructor (public age: UserserviceService) {}

  public contactinfo : any = {}

  ngOnInit(){
    // console.log (localStorage['viewobject'])
    this.contactinfo = JSON.parse(localStorage.getItem('viewobject')!)
    console.log (this.contactinfo)
  }

}
