import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

// פונקציה שמחזירה האם מורשה להיכנס לנתיב
export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);

  // const router = inject(Router);
  // router.navigateByUrl('login');

  return userService.token ? true : false;
};
