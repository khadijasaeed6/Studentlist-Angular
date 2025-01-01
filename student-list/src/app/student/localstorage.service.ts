import { Injectable } from '@angular/core';
import { Init } from './student-init';
import { Student } from './student.model';

@Injectable({
    providedIn: 'root',
})
export class StudentServiceLocal extends Init {

    constructor() {
        super();
        console.log('StudentService Works');
        this.load();
    }

    getAllStudents() {
        // Retrieve students data from localStorage
        const studentsData = localStorage.getItem('students');
        // Check if the data exists and parse it; otherwise, return an empty array
        if (studentsData) {
            return JSON.parse(studentsData);
        } else {
            return [];
        }
    }


    addStudent(newStudent: Student) {
        let students: Student[] = [];
        const studentListFromLocal = localStorage.getItem('students');
    
        if (studentListFromLocal) {
            students = JSON.parse(studentListFromLocal);
        }
    
        students.push(newStudent);
        localStorage.setItem('students', JSON.stringify(students));
    }

    updateStudent(id: string, updatedStudent: Student): void {
        const studentListFromLocal = localStorage.getItem('students');
        if (studentListFromLocal) {
          let students = JSON.parse(studentListFromLocal);
          const index = students.findIndex((s: Student) => s.id === id);
      
          if (index) {
            students[index] = updatedStudent;
            localStorage.setItem('students', JSON.stringify(students));
          }
        }
      }
       

    deleteStudent(id: string): void {
        const studentListFromLocal = localStorage.getItem('students');
    
        if (studentListFromLocal) {
            const students: Student[] = JSON.parse(studentListFromLocal);
            const updatedStudents = students.filter(student => student.id !== id);
            localStorage.setItem('students', JSON.stringify(updatedStudents));
        }
    }
    }







