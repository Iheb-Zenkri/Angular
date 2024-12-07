import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const loggedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return true; 
  }else{
    router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
  }

};
