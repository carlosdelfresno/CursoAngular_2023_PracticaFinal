import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLogged() && state.url !== '/login') {
    return router.parseUrl('/login');
  }
  if (authService.isLogged() && state.url === '/login') {
    return router.parseUrl('/main');
  }
  return true;
};
