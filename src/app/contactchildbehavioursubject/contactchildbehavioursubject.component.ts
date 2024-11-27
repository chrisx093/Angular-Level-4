import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehavioursubjectService } from '../services/behavioursubject.service';

@Component({
  selector: 'app-contactchildbehavioursubject',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactchildbehavioursubject.component.html',
  styleUrl: './contactchildbehavioursubject.component.css'
})
export class ContactchildbehavioursubjectComponent {

  constructor (public detailsbehaviour: BehavioursubjectService){}
  public res:any = ''

  ngOnInit(){
    // console.log (this.behavioursub.behaviour)
    // this.behavioursub.behaviour.subscribe(data=>{
    //   console.log(data);
    //   this.data = data
    // })
    this.detailsbehaviour.storedcontact.subscribe(res1=>{
      console.log(res1)
      this.res = res1
    })

  }

}
