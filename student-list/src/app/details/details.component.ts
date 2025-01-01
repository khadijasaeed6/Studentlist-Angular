import { Component, EventEmitter, Input, Output, output } from '@angular/core';
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
  @Output() onDataChanged = new EventEmitter<string>(); // Emits the student ID to the parent


  save()
  {
    // Save data to local storage
    // localStorage.setItem();

    if (this.student) {
      //localStorage.setItem(this.student.id, JSON.stringify(this.student));

    // Notify parent component of changes
    this.onDataChanged.emit(this.student.id);

  }

  
  }
}



