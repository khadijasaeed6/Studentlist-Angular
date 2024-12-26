import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student/student.service';
import { Gender, Grade, Student } from '../student/student.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceLocal } from '../student/localstorage.service';


@Component({
  imports: [FormsModule, CommonModule],
  standalone: true,
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],

})
export class AddStudentComponent implements OnInit {
  gender = Gender;
  student: Student = {
    id: '',
    firstName: '',
    lastName: '',
    gender: Gender.Female,
    grade: Grade.A,
    dob: new Date(),
    // age: 0,
    email: '',
    phone: 0,
    address: ''
  };

  constructor(private route: ActivatedRoute,
    // private studentService: StudentService,
    private studentService: StudentServiceLocal,
    private router: Router,) {

  }

  ngOnInit() {
    const studentId = this.route.snapshot.params['id'];
    if (!studentId) return
    // this.studentService.add(studentId).subscribe((student) => {
    //   if (student)
    //     this.student = student;
    // });
    if (studentId) {
      // Fetch the student details if `id` is present
      const students = this.studentService.getAllStudents();
      const student = students.find((s:Student) => s.id === studentId);

      if (student) {
        this.student = student;
      }
    }
      
    }
  

  // saveStudent() {
   
  //   this.studentService.saveStudent(this.student).subscribe({
  //     next: () => this.router.navigate(['/student'])
  //   })

  saveStudent(): void {
    if (this.student.id) {
      // If an ID exists, it's an update
      this.studentService.updateStudent(this.student.id, this.student);
      this.router.navigate(['/student']);
    } else {
      // If no ID exists, it's a new student
      this.student.id = new Date().getTime().toString(); // Generate a unique ID
      this.studentService.addStudent(this.student);
      alert('Student saved successfully!');
      this.router.navigate(['/student']);

    }
  }


  }


















