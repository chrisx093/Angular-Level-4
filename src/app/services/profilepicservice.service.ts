import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilepicserviceService {
  private profilePicSubject = new BehaviorSubject<string | null>(null);
  constructor() { 
    const storedProfilePic = localStorage.getItem('profilePic');
    if (storedProfilePic) {
      this.profilePicSubject.next(storedProfilePic);
    }
  }
  
  
  profilePic$ = this.profilePicSubject.asObservable();

  setProfilePic(imageUrl: string) {
    this.profilePicSubject.next(imageUrl);
    localStorage.setItem('profilePic', imageUrl);
  }

  getProfilePic() {
    return this.profilePicSubject.value;
  }
}
