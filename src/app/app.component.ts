import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { LoginComponent } from './components/login/login.component';
import { CourseService } from './shared/services/course.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CoursesListComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lesson12';
  private courseService = inject(CourseService);
  userService = inject(UserService); // בתצוגה ניתן לפנות רק למשתנים ציבוריים

  getCWU() {
    this.courseService.getAllWithUsers().subscribe((data) => {
      console.log(data);
    });
  }
}
