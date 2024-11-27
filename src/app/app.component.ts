import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { EditcomponentComponent } from './editcomponent/editcomponent.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

interface Obj{
  fullname:string,
  phonenumber: string,
  state:string,
  email:string
}

interface Arr {
  details:
    {
      firstname1:string
      lastname1:string
      phonenumber:number
      state:string
    }[]
  ,

    books:
      {
      title:string
      author:string
      prodyear:number
      }[];

  }


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ContactAppComponent, EditcomponentComponent, LandingpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first_class';

  public firstname = "Chris"
  public lastname:string = "Sunny"
  public check:boolean = true
  public age:Number = 20
  public address:undefined

  public arrayone:(number|string|boolean)[] = [1,2,'name', true]
  public arraytwo:(Obj|number|string|boolean)[] = [1,'name', true, {
    fullname: 'sunday',
    phonenumber: 'name',
    state: 'Lagos',
    email: 'abc@gmail.com'
  }]


  

  // union
  public secondname :string | number | undefined  = 60
// Object

// Without using the schema(Interface)
public objone:{
  name:string,
  age:number,
  address:string,
  Color:string
} ={
  name:'',
  age:56,
  address:'Lagos',
  Color:'red'
}

// With interface (Defined at the top of the code)
public objtwo:Obj ={
  fullname:'',
  phonenumber:'',
  state:'',
  email:'',
}


public objArray:Arr = {
  details :[
    {
      firstname1: 'John',
      lastname1: 'Joe',
      phonenumber: 809,
      state: 'Lagos 1',
    }],

    books:[{
      title: 'book101',
      author: 'user',
      prodyear: 2021
    }]

   
  
}

 









// union, interface, inference
// inference suggest the type of data
// Union is used to join different data types together
// Interface allows to write a schema 


signup (){
  this.lastname = ''
  

}

}
