export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  age?: number;
  grade: Grade;
  email: string;
  phone: number;
  address: string;
  gender: Gender;
  dob: Date
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other'
}

export enum Grade {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F'
}

