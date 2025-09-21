
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Login } from './login';

@NgModule({
  declarations: [
    Login
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Login }
    ])
  ],
  exports: [
    Login
  ]
})
export class LoginModule { }
