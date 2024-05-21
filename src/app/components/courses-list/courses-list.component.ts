import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../../shared/services/course.service';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss',
})
export class CoursesListComponent implements OnInit {
  private courseService = inject(CourseService);
  list: any[] = [];

  ngOnInit(): void {
    this.courseService.getAll().subscribe((data) => {
      this.list = data as any[];
      console.log(data);
    });
  }
}
