import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurd implements CanActivate {
  private readonly router = inject(Router);
  private readonly authSvc = inject(AuthService);

  canActivate() {
    if (this.authSvc.authenticated) {
      return true;
    } else {
      return this.router.navigateByUrl('/login');
    }
  }
}
