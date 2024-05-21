import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private http = inject(HttpClient);
  private coursesURL = `${environment.apiURL}/courses`;

  // constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get(this.coursesURL);
  }

  getAllWithUsers() {
    return this.http.get(`${this.coursesURL}/with-users`);
  }
}
