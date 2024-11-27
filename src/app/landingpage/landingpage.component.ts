import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

  constructor (public userserve: UserserviceService){}
  public lastname = 'this.userserve.lastname'

  ngOnInit(){
    console.log (this.userserve.msg)
    console.log (this.userserve.getlastname())
    console.log (this.userserve.userData)

  }

}
