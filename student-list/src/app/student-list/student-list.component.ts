import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student.model'; 
import {StudentService} from '../student/student.service';
import { RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from '../details/details.component';



@Component({
  standalone: true,
  selector: 'app-student-list',
  imports: [CommonModule, NgFor, FormsModule, RouterModule, DetailsComponent ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})


export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {
    
  }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((students) => {
      this.students = students;
    });

  }

  deleteStudent(id: string): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.students = this.students.filter(student => student.id !== id);
      });
    }
  }

  
}


