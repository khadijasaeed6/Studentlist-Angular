import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DetailsComponent } from './details/details.component';

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
  
  {
    path: 'student/details/:id',
    component: DetailsComponent,
    title: 'Student - Details'
  },

  { path: '', redirectTo: '/student', pathMatch: 'full' },

  
];
