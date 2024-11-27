import { Component } from '@angular/core';
import { ChildbehavioursubComponent } from '../childbehavioursub/childbehavioursub.component';
import { CommonModule } from '@angular/common';
import { BehavioursubjectService } from '../services/behavioursubject.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parentbehavioursub',
  standalone: true,
  imports: [ChildbehavioursubComponent, CommonModule, FormsModule],
  templateUrl: './parentbehavioursub.component.html',
  styleUrl: './parentbehavioursub.component.css'
})
export class ParentbehavioursubComponent {

  public msg = ''
  constructor (public behavioursub: BehavioursubjectService) {}

  upd(){
    console.log(this.msg)
    this.behavioursub.behaviour.next(this.msg)
  }
}
