import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.loggedIn.asObservable();

  constructor(private router: Router) {
    // Check local storage for a previous session
    const storedLogin = localStorage.getItem('isLoggedIn');
    if (storedLogin === 'true') {
      this.loggedIn.next(true);
    }
  }

  // Logs the user in
  login(): void {
    this.loggedIn.next(true);
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/dashboard']);
  }

  // Logs the user out
  logout(): void {
    this.loggedIn.next(false);
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
