import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './student.model'; 

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const student: Student[] = [
      {
        id: '1',
        FirstName: 'John',
        LasttName: 'Doe',
        grade: 'A',
        age: 16,
        email: 'john.doe@example.com',
        phone: 5551234567,
        address: '123 Main St, Springfield, IL'
      },
      {
        id: '2',
        FirstName: 'Jane',
        LasttName: 'Smith',
        grade: 'B',
        age: 15,
        email: 'jane.smith@example.com',
        phone: 5559876543,
        address: '456 Elm St, Springfield, IL'
      },
      {
        id: '3',
        FirstName: 'Mark',
        LasttName: 'Johnson',
        grade: 'C',
        age: 17,
        email: 'mark.johnson@example.com',
        phone: 5554567890,
        address: '789 Oak St, Springfield, IL'
      }
    ];
    return { student };
  }
}
