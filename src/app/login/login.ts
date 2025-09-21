import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    if (this.credentials.username === 'admin' && this.credentials.password === 'admin') {
      this.authService.login();
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password');
    }
  }
}
