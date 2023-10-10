import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  // Your authentication logic here.
  if(auth.haveaccess()) {
    return true;
  } else {
    alert("access denied")
    router.navigate([''])
    return false;
  }
};
