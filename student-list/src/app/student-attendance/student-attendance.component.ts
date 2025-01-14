import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student.model';
import { StudentServiceLocal } from '../student/localstorage.service';

@Component({
  selector: 'app-student-attendance',
  imports: [],
  templateUrl: './student-attendance.component.html',
  styleUrl: './student-attendance.component.css'
})
export class StudentAttendanceComponent implements OnInit {


  studentList=new Array <Student>();
  

  constructor(private studentService: StudentServiceLocal){
    
  }

  ngOnInit(): void {
    this.studentService.studentForAttendance.subscribe((res: Student) =>  {
      console.log(res)
      this.studentList.push(res);
    })

    
    
    

  }

}
