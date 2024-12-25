import { Gender, Grade, Student } from './student.model'; 

export class Init {
  load() {
    const studentsInStorage = localStorage.getItem('students');
    if (studentsInStorage === null || studentsInStorage === undefined) {
      console.log('No students found... Creating...');
      
      const students: Student[] = [
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
          dob: new Date('2002-05-25'),
          age: 15,
          email: 'jane.smith@example.com',
          phone: 5559876543,
          address: '456 Elm St, Springfield, IL'
        },
        {
          id: '3',
          firstName: 'Mark',
          lastName: 'Johnson',
          gender: Gender.Male, 
          grade: Grade.D,
          dob: new Date('2001-04-12'),
          age: 17,
          email: 'mark.johnson@example.com',
          phone: 5554567890,
          address: '789 Oak St, Springfield, IL'
        }
      ];

      // Save the students to localStorage
      localStorage.setItem('students', JSON.stringify(students));
      return students;  
    }

    // If students are already in localStorage, return them
    return JSON.parse(studentsInStorage);  
  }
}
