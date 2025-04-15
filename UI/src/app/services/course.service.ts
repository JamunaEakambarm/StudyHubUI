import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Course {
  courseID?: string;
  title: string;
  description: string;
  createdAt: string;
}


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'https://localhost:7273/api/Courses';
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  getCourse(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  createCourse(course: Course): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Ensure Content-Type is set to JSON
    });

    // Return the POST request with proper headers
    return this.http.post(this.apiUrl, JSON.stringify(course), { headers });
    //return this.http.post<Course>(this.apiUrl, course);

  }

  updateCourse(id: string, course: Course): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
