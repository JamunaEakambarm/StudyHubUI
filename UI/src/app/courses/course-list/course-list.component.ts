import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CourseService, Course } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe(data => this.courses = data);
  }

  deleteCourse(id: string | undefined): void {
    if (!id) {
      console.error('Invalid course ID'); // Handle the case where id is undefined
      return;
    }
  
    if (confirm('Are you sure?')) {
      this.courseService.deleteCourse(id).subscribe(() => {
        this.courses = this.courses.filter(course => course.courseID !== id);
      });
    }
  }
}
