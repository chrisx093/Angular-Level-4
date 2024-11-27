import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reactiveformtitle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reactiveformtitle.component.html',
  styleUrl: './reactiveformtitle.component.css'
})
export class ReactiveformtitleComponent {

  public data:any = ''

  ngOnInit() {
 
    const savedData = JSON.parse (localStorage.getItem('arrayIndex') || '[]');
    this.data= [savedData]
    console.log (this.data)
    
  }
}





  