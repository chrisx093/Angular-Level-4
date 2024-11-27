import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service'

export const studentguardGuard: CanActivateFn = (route, state) => {

  // let student = JSON.parse (localStorage.getItem('currentstudent')!)
  let router = inject(Router)
  const loginService = inject(LoginserviceService);
  const student = loginService.getCurrentStudent();

  if(!student){
    router.navigate(['/'])
    return false;
  }
  return true;
};
