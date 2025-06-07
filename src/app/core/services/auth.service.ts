import { Injectable } from '@angular/core';

export type Login = {
  login: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticated = false;

  checkAuth() {
    this.authenticated = localStorage.getItem('demo_login_status')
      ? true
      : false;
  }

  signin(credentials: Login): void {
    if (credentials) {
      this.authenticated = true;
    }
  }
}
