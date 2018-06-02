export class Student {
  id: number;
  name: string;
  birth_date: any;
  age: number;
  nationality: string;
  year: number;
  student_class: string;
  shift: string;
  father_name: string;
  mother_name: string;
  address: string;
  parent_telephone: number;
  parent_email: string;
}

export class DailyLog {
  id: number;
  date: any;
  activity: any;
  note: string;
  student_id: any;
}

export class Report {
  id: number;
  reason: any;
  general_information: any;
  synthesis: any;
  conclusion: any;
  family_orientation: any;
  school_orientation: any;
  student_id: any;
}
