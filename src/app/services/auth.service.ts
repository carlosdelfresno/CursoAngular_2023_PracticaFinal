import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  login(usuario: string, password: string): boolean {
    if (usuario.toLowerCase() === 'usuario' && password === '1234') {
      localStorage.setItem('token', crypto.randomUUID());
      return true;
    } else {
      return false;
    }
  }
}
