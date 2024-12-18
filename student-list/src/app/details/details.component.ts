import { Component, Input } from '@angular/core';
import { Student } from '../student/student.model';
import { CommonModule, NgIf,  } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-details',
  imports: [NgIf, CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() student?: Student ;

}

