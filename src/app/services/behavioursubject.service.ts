import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BehavioursubjectService {

  constructor() { }
  public behaviour = new BehaviorSubject('Oyindamola')

  public storedcontact = new BehaviorSubject ({Firstname:'new', Lastname:'new', Email:'new', Phonenumber:'1234'});

  
}

