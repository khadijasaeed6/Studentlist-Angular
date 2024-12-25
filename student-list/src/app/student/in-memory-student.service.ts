import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Gender, Grade, Student } from './student.model'; 

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const student: Student[] = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        gender: Gender.Male,
        grade: Grade.A,
        dob: new Date('2003-05-15'),
        age: 16,
        email: 'john.doe@example.com',
        phone: 5551234567,
        address: '123 Main St, Springfield, IL'
      },
      {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        gender: Gender.Female,
        grade: Grade.B,
        dob: new Date('2003-05-15'),
        age: 15,
        email: 'jane.smith@example.com',
        phone: 5559876543,
        address: '456 Elm St, Springfield, IL'
      },
      {
        id: '3',
        firstName: 'Mark',
        lastName: 'Johnson',
        gender: Gender.Female,
        grade: Grade.D,
        dob: new Date('2003-05-15'),
        age: 17,
        email: 'mark.johnson@example.com',
        phone: 5554567890,
        address: '789 Oak St, Springfield, IL'
      }
    ];
    return { student };
  }
}
