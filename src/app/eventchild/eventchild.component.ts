import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventchild',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eventchild.component.html',
  styleUrl: './eventchild.component.css'
})
export class EventchildComponent {
  // helps to receive message from the parent
@Input() sendmsg =''
public msgToParent=''

// helps to sent out message to the parent
@Output() eventemit= new EventEmitter

send(){
  this.eventemit.emit(this.msgToParent)
}
}
