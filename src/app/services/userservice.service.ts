import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  public msg = 'I am going to the market'
  public lastname = 'Owolabi'
  public firstname = 'Oyindamola'
  public age = 12


  public getlastname(){
    return this.age
  }

  public userData = [
   
    
    {
      age:12,
      gender: 'Male',
      firstname: 'lorem1',
      lastname:'lorem1'
    },
    {
      age:13,
      gender: 'Female',
      firstname: 'lorem2',
      lastname:'lorem2'
    },
    {
      age:14,
      gender: 'Male',
      firstname: 'lorem3',
      lastname:'lorem3'
    },
    {
      age:15,
      gender: 'Female',
      firstname: 'lorem4',
      lastname:'lorem4'
    },
    {
      age:16,
      gender: 'Male',
      firstname: 'lorem5',
      lastname:'lorem5'
    },
    {
      age:17,
      gender: 'Female',
      firstname: 'lorem6',
      lastname:'lorem6'
    },
    {
      age:18,
      gender: 'Male',
      firstname: 'lorem7',
      lastname:'lorem7'
    },
    {
      age:19,
      gender: 'Female',
      firstname: 'lorem8',
      lastname:'lorem8'
    }
  ]
}
