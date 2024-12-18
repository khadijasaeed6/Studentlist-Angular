import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from '../student/student.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  
  
  constructor(){}

}
