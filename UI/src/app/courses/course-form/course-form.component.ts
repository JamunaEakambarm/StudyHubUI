import { Component } from '@angular/core';
import { CommonModule,NgIf, NgFor  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { CourseService, Course } from '../../services/course.service';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
    
  ],
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  course: Course = {  title: '', description: '', createdAt: '' };

  constructor(private courseService: CourseService, private router: Router) {}

  saveCourse(): void {
  if (!this.course.title || !this.course.description) {
    console.error('❌ Missing title or description!');
    return; // Prevent form submission if fields are empty
  }

  // Prepare the course object with necessary fields only
  const newCourse: Course = {
    
    title: this.course.title,
    description: this.course.description,
    createdAt: new Date().toISOString() // Optional, but can be useful for records
    // Do NOT send 'courseID' as it will be auto-generated on the server
    
    
  };

  console.log('📤 Sending course:', newCourse); // Debugging request data

  // Send the new course to the backend
  this.courseService.createCourse(newCourse).subscribe({
    next: () => {
      console.log('✅ Course saved successfully!');
      this.router.navigate(['/courses']); // Navigate to the course list after saving
    },
    error: (err) => {
      console.error('❌ Error saving course:', err); // Log errors
      if (err.status === 400) {
        // If 400 error occurs, log the error message (if available)
        console.error('400 Bad Request - The request data might be incorrect or missing required fields.');
      }
    }
  });
  }


}
