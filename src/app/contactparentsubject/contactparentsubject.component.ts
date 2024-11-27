import { Component } from '@angular/core';
import { ContactchildbehavioursubjectComponent } from '../contactchildbehavioursubject/contactchildbehavioursubject.component';
import { DataserviceService } from '../services/dataservice.service';
import { CommonModule } from '@angular/common';
import { BehavioursubjectService } from '../services/behavioursubject.service';

@Component({
  selector: 'app-contactparentsubject',
  standalone: true,
  imports: [ContactchildbehavioursubjectComponent, CommonModule],
  templateUrl: './contactparentsubject.component.html',
  styleUrl: './contactparentsubject.component.css'
})
export class ContactparentsubjectComponent {

  constructor (public data:DataserviceService, public serv: BehavioursubjectService){}

  ngOnInit(){
    console.log (this.data.storedcontact)
  }

  show(i:number){
    console.log(this.data.storedcontact[i])
    this.serv.storedcontact.next(this.data.storedcontact[i])
  }
}
