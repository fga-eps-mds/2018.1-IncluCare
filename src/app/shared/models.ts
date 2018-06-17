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
  responsible: string;
  address: string;
  parent_telephone: number;
  created_at: any;
  updated_at: any;
}

export class DailyLog {
  id: number;
  date: any;
  activity: any;
  note: string;
  created_by: any;
  updated_by: any;
  created_at: any;
  updated_at: any;
  student: any;
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
  reason_adequation: boolean;
  reason_emotional: boolean;
  reason_performance: boolean;
  reason_behavior: boolean;
  reason_language: boolean;
  level_school: boolean;
  level_family: boolean;
  level_student: boolean;
  envolved_school: string;
  envolved_family: string;
  envolved_student: string;
  realized_actions: any;
  possibly_saa: boolean;
  possibly_eeaa: boolean;
  possibly_resources: boolean;
  possibly_adequation: boolean;
  created_by: string;
  updated_by: string;
  created_at: any;
  updated_at: any;
  student: any;
  student_id: any;
}

export class Referral {
  id: number;
  title: any;
  body: any;
  created_by: string;
  updated_by: string;
  created_at: any;
  updated_at: any;
  student: any;
  student_id: any;
}

export class Recommendation {
  id: number;
  title: any;
  body: any;
  created_by: string;
  updated_by: string;
  created_at: any;
  updated_at: any;
  student: any;
  student_id: any;
}

export class Activity {
  id: number;
  title: any;
  created_by: string;
  updated_by: string;
  created_at: any;
  updated_at: any;
  student_id: any;
}
