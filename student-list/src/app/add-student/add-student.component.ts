import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { StudentService } from '../student/student.service';
import { Gender, Grade, Student } from '../student/student.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceLocal } from '../student/localstorage.service';
import moment from 'moment';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';



@Component({
  imports: [FormsModule, CommonModule, NgbDatepickerModule],
  standalone: true,
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],

})
export class AddStudentComponent implements OnInit,AfterViewInit {

  gender = Gender;
  grade = Grade;
  @Input() studentTemp? = new Student()
  student = new Student()
  @Output() resetStudentModal = new EventEmitter<void>();
  model: NgbDateStruct = { year: 2023, month: 1, day: 1 };

  constructor(private route: ActivatedRoute,
    // private studentService: StudentService,
    private studentService: StudentServiceLocal,
    private router: Router,) {

  }
  ngAfterViewInit(): void {
    
    this.assignValues();
    
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
      const student = students.find((s: Student) => s.id === studentId);

      // if (student) {
      //   this.student = student;
      // }

      if (student) {
        this.student = student;
        if (this.student && this.student.dob && !(this.student.dob instanceof Date)) {
          this.student.dob = new Date(this.student.dob);
        }
        if (this.student?.dob) {
          this.model = {
            year: this.student.dob.getFullYear(),
            month: this.student.dob.getMonth() + 1, // JavaScript months are 0-indexed
            day: this.student.dob.getDate(),
          };
        } else {
          this.model = {
            year: 0, // Default values
            month: 0,
            day: 0,
          };
        }
        
      }
    }


  }


  // saveStudent() {

  //   this.studentService.saveStudent(this.student).subscribe({
  //     next: () => this.router.navigate(['/student'])
  //   })

  saveStudent(): void {
    // if (this.student.dob) {
    //   this.student.age = this.calculateAge(this.student.dob);
    // }

    if (this.model) {
      const selectedDate = moment([this.model.year, this.model.month - 1, this.model.day]).toDate();
      if(this.student){
        this.student.dob = selectedDate;
        this.student.age = this.calculateAge(this.student.dob);
      }
    }

    if (this.student?.id) {
      // If an ID exists, it's an update
      this.studentService.updateStudent(this.student.id, this.student);
      this.router.navigate(['/student']);

    } else {
      if(this.student){
      this.student.id = `${Math.floor(Math.random() * 90) + 10}`;
      this.studentService.addStudent(this.student);
      this.student=new Student();
      this.router.navigate(['/student']);
      }
    }

    this.resetStudentModal.emit();

   
  }

  onDobChange(model: NgbDateStruct): void {
    if(this.student){
    this.student.dob = new Date(model.year, model.month - 1, model.day); // Convert NgbDateStruct to Date object
    this.student.age = this.calculateAge(this.student.dob); // Recalculate age
    }
  }

  calculateAge(dob: Date): number {
    // Convert the date of birth to a Moment.js object
    const birthDate = moment(dob);
    const currentDate = moment();
    const age = currentDate.diff(birthDate, 'years');

    return age;
  }

  assignValues(){
    if(this.studentTemp){
      this.student=this.studentTemp
    }
   
  }
  


}


















