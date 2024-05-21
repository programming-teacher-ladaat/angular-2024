import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private usersURL = `${environment.apiURL}/users`;

  currentUser?: User;

  public get token(): string | null {
    return localStorage.getItem('mytoken');
  }

  public set token(token: string | null) {
    if (token) {
      localStorage.setItem('mytoken', token);
    }
  }

  login(u: User) {
    return this.http.post<{ user: User; token: string }>(
      `${this.usersURL}/signin`,
      u
    );
  }
}
