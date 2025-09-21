import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.loggedIn;

  constructor() {
    this.loggedIn.next(false);
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      this.loggedIn.next(true);
      return true;
    }
    this.loggedIn.next(false);
    return false;
  }

  logout(): void {
    this.loggedIn.next(false);
  }
}
