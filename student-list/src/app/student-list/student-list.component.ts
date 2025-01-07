import { Component, OnInit,inject, Type  } from '@angular/core';
import { Student } from '../student/student.model'; 
import {StudentService} from '../student/student.service';
import { RouterModule } from '@angular/router';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from '../details/details.component';
import { StudentServiceLocal } from '../student/localstorage.service';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';





@Component({
  standalone: true,
  selector: 'app-student-list',
  imports: [CommonModule, NgFor, FormsModule, RouterModule, DetailsComponent ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})


export class StudentListComponent implements OnInit {
  students: Student[] = [];
  selectedStudent?: Student;
  studentId: string = ''; // To hold the emitted student ID
  studentToDelete?: Student;

  // constructor(private studentService: StudentService) {// }

  constructor(private studentService: StudentServiceLocal,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    // this.studentService.getAllStudents().subscribe((students) => {
    //   this.students = students;
    // });

    this.students=this.studentService.getAllStudents();

  }

  // deleteStudent(id: string): void {
  //   if (confirm('Are you sure you want to delete this student?')) {
  //     this.studentService.deleteStudent(id).subscribe(() => {
  //       this.students = this.students.filter(student => student.id !== id);
  //     });
  //   }
  // }

  // deleteStudent(id: string): void {
  //   if (confirm('Are you sure you want to delete this student?')) {
  //     this.studentService.deleteStudent(id);
  //     // Refresh the list after deletion
  //     this.students = this.studentService.getAllStudents();
  //   }
  // }
  

  viewDetails(student: Student) {
    this.selectedStudent = student;
  }

  OnDataChanged(studentId: string): void {
    this.studentId = studentId;
    console.log('Saved Student ID:', this.studentId);
  }


  // openDeleteModal(student: Student): void {
  //   const modalRef = this.modalService.open(DeleteModalComponent);
  //   modalRef.componentInstance.student = student; // Pass student to modal

  //   // Listen for confirmDelete event
  //   modalRef.componentInstance.confirmDelete.subscribe(() => {
  //     this.confirmDelete(student.id);
  //   });
  // }

  // confirmDelete(studentId: string): void {
  //   this.studentService.deleteStudent(studentId);
  //   this.students = this.studentService.getAllStudents(); // Refresh the list
  // }

  openDeleteModal(content: any, student: Student): void {
    this.studentToDelete = student; // Set the student to delete
    this.modalService.open(content, { centered: true }); // Open modal
  }

  confirmDelete(): void {
    if (this.studentToDelete) {
      this.studentService.deleteStudent(this.studentToDelete.id);
      this.students = this.studentService.getAllStudents(); // Refresh the list
      this.studentToDelete = undefined; // Reset the studentToDelete
    }
  }

  
}


  



