import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { ContactchildbehavioursubjectComponent } from '../contactchildbehavioursubject/contactchildbehavioursubject.component';

@Component({
  selector: 'app-dataservice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dataservice.component.html',
  styleUrl: './dataservice.component.css'
})
export class DataserviceComponent {

  constructor (public data:DataserviceService) {}

 
  ngOnInit(){
    console.log (this.data.storedcontact)
  }
  

  


}
