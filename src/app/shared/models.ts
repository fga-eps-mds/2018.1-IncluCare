export class Student {
  id: number;
  name: string;
  birth_date: any;
  age: number;
  year: number;
  student_class: string;
  shift: string;
  nationality: string;
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
  init_date: any;
  end_date: any;
  school_phone: string;
  member_name: string;
  school_name: string;
  reason: any;
  general_information: any;
  synthesis: any;
  conclusion: any;
  family_orientation: any;
  school_orientation: any;
  pedagogue_name: string;
  pedagogue_function: string;
  pedagogue_registry: string;
  psycholog_name: string;
  psycholog_function: string;
  psycholog_registry: string;
  reason_adequation: string;
  reason_emotional: string;
  reason_performance: string;
  reason_behavior: string;
  reason_language: string;
  level_school: string;
  level_family: string;
  level_student: string;
  envolved_school: string;
  envolved_family: string;
  envolved_student: string;
  realized_actions: any;
  possibly_saa: string;
  possibly_eeaa: string;
  possibly_resources: string;
  possibly_adequation: string;
  student_id: any;
}
