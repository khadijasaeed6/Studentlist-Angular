import { Injectable } from '@angular/core';
import { Init } from './student-init';
import { Student } from './student.model';

@Injectable({
    providedIn: 'root',
})
export class StudentService extends Init {

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

    // addStudent(newStudent: Student) {
    //     let students;
    //     const studentListFromlocal = localStorage.getItem('students');
    //     if (studentListFromlocal?.length) {
    //         students = JSON.parse(studentListFromlocal) ;
    //     }
    //     students.push(newStudent);
    //     localStorage.setItem('students', JSON.stringify(students));
    // }

    addStudent(newStudent: Student) {
        let students: Student[] = [];
        const studentListFromLocal = localStorage.getItem('students');
    
        if (studentListFromLocal) {
            students = JSON.parse(studentListFromLocal);
        }
    
        students.push(newStudent);
        localStorage.setItem('students', JSON.stringify(students));
    }
    

    deleteStudent(id: string): void {
        const studentListFromLocal = localStorage.getItem('students');
    
        if (studentListFromLocal) {
            // Parse the string into an array
            const students: Student[] = JSON.parse(studentListFromLocal);
    
            // Filter out the student with the given ID
            const updatedStudents = students.filter(student => student.id !== id);
    
            // Save the updated array back to local storage
            localStorage.setItem('students', JSON.stringify(updatedStudents));
        }
    }
    

    }







