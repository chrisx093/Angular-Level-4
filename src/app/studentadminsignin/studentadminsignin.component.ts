import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentadminsignin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './studentadminsignin.component.html',
  styleUrl: './studentadminsignin.component.css'
})
export class StudentadminsigninComponent {

  constructor(public router:Router) {}

  public email =''
  public password = ''
  public msg = ''
  public array: any[] = [];

  ngOnInit() {
    // Get the admin array from localStorage
    this.array = JSON.parse(localStorage.getItem('adminarray') || '[]');
    console.log(this.array);  // For debugging, you can see the stored data
  }

  login(){
    let admin = this.array.find((admin:any, index:number)=> admin.email==this.email && admin.password == this.password)



    if(admin){
  localStorage.setItem('currentadmin', JSON.stringify(admin))
this.router.navigate(['studentadmindashboard'])
      // console.log(admin)
    }
    else {

      this.msg='Incorrect email or password'
      // console.log('No record found')
    }


  }

}
