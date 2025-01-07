import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student/student.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-delete-modal',
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent {
  @Input() student?: Student; // Student to be deleted
  @Output() confirmDelete = new EventEmitter<void>(); // Emit delete confirmation

  constructor(public activeModal: NgbActiveModal) {}

  onConfirm(): void {
    this.confirmDelete.emit(); // Notify parent of deletion
    this.activeModal.close(); // Close the modal
  }

  onCancel(): void {
    this.activeModal.dismiss(); // Dismiss the modal
  }

}
