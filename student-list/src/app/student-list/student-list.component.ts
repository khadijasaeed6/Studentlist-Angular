import { Component, OnInit,PipeTransform  } from '@angular/core';
import { Student } from '../student/student.model'; 
import {StudentService} from '../student/student.service';
import { RouterModule } from '@angular/router';
import { CommonModule, JsonPipe, NgFor, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from '../details/details.component';
import { StudentServiceLocal } from '../student/localstorage.service';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  standalone: true,
  selector: 'app-student-list',
  imports: [CommonModule, NgFor, FormsModule, RouterModule, DetailsComponent ],
  providers: [DecimalPipe],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})


export class StudentListComponent implements OnInit {
  students: Student[] = [];
  selectedStudent?: Student;
  studentId: string = ''; // To hold the emitted student ID
  studentToDelete?: Student;
  filteredStudents: Student[] = [];
  searchText: string = '';

  // constructor(private studentService: StudentService) {// }

  constructor(private studentService: StudentServiceLocal,
    private modalService: NgbModal,
    private pipe: DecimalPipe
  ) { }

  ngOnInit(): void {
    // this.studentService.getAllStudents().subscribe((students) => {
    //   this.students = students;
    // });

    this.students=this.studentService.getAllStudents();
    this.filteredStudents = this.students; 

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

  searchStudents(text: string, pipe: PipeTransform, students: Student[]): Student[] {
    return students.filter((student) => {
      const term = text.toLowerCase();
      return (
        student.firstName.toLowerCase().includes(term) ||
        student.lastName.toLowerCase().includes(term) ||
        student.grade.toLowerCase().includes(term) ||
        pipe.transform(student.age).includes(term) ||
        student.email.toLowerCase().includes(term) ||
        student.phone.toString().includes(term)
      );
    });

  }

  onSearch() {
    this.filteredStudents = this.searchStudents(this.searchText, this.pipe, this.students);
  }
}

  



  



