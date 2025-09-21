import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from "./app-routing-module";
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [AppRoutingModule]
})
export class App implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  logout(): void {
    this.authService.logout();
  }
}
