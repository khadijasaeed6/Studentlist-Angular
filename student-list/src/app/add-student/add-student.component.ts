import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student/student.service';
import { Gender, Grade, Student } from '../student/student.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  imports: [FormsModule, CommonModule],
  standalone: true,
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],

})
export class AddStudentComponent implements OnInit {
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
    private studentService: StudentService,
    private router: Router) {

  }

  ngOnInit() {
    const studentId = this.route.snapshot.params['id'];
    if (!studentId) return
    this.studentService.getStudent(studentId).subscribe((student) => {
      if (student)
        this.student = student;
    });
  };

  saveStudent() {
   
    this.studentService.saveStudent(this.student).subscribe({
      next: () => this.router.navigate(['/student'])
    })


  }


}
















