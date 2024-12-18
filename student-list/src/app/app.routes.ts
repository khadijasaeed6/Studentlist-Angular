import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';


export const routes: Routes = [
  {
    path: 'student',
    component: StudentListComponent,
    title: 'Student'
  },
  {
    path: 'student/add/:id',
    component: AddStudentComponent,
    title: 'Student - Add'
  },
  
  {
    path: 'student/add',
    component: AddStudentComponent,
    title: 'Student - Add'
  },
  { path: '', redirectTo: '/student', pathMatch: 'full' },

  
];
