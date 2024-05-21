import { Component } from '@angular/core';
import { inject, Injectable } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private userService = inject(UserService);

  login(email: HTMLInputElement, password: HTMLInputElement) {
    this.userService
      .login({ email: email.value, password: password.value })
      .subscribe((data) => {
        console.log(data);
        this.userService.token = data.token;
      });
  }
}
