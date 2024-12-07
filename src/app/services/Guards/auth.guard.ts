import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);  

  if (typeof window !== 'undefined' && window.localStorage) {
    const userTypeSelected = localStorage.getItem('userType');

    if (userTypeSelected) {
      return true;
    } else {
      router.navigate(['/pre-login']);
      return false;
    }
  } else {
    router.navigate(['/pre-login']);
    return false;
  }
};
