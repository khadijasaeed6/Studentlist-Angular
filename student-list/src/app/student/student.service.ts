import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Student } from './student.model'; 
import { nanoid } from 'nanoid'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('api/student/');
  }

  getStudent(id: string): Observable<Student | undefined> {
    return this.http.get<Student>(`api/student/${id}`)
      
  }

  saveStudent(student: Student): Observable<Student> {
    const headers = { headers: { 'Content-Type': 'application/json' } };

    if (!student.id || student.id == '' ) {
      let newStudent: Student = { ...student, id: nanoid(5) };
      return this.http.post<Student>('api/student/', newStudent, headers)
    }
    else
      return this.http.put<Student>('api/student/', student, headers);
  
  }

  deleteStudent(id: string): Observable<void> {
    return this.http.delete<void>(`api/student/${id}`);
  }

  

}
