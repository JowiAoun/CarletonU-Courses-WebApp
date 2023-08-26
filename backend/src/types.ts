export type Course = {
  code: string;
  subject: string;
  credits: number;
  ltitle: string;
  level: string;
  description?: string;
  precludes?: string;
  prereqs?: string;
  schedule_general?: string;
  also_listed_as?: string;
  reviews: Review[];
};

export type CourseActive = {
  crn: number;
  code: string;
  term_code: string;
  section?: string;
  level: string;
  status: string;
  description?: string;
  schedule?: string;
  section_type?: string;
  additional_info?: string;
  also_register_in?: string;
  title: string;
  ltitle: string;
  credits?: number;
  full_session_info?: string;
  has_prereqs: number;
  has_restrictions: number;
  instructor?: string;
  meeting_date?: string;
  days?: string[];
  time_start?: string;
  time_end?: string;
  building?: string;
  room?: string;
  saved_on: number;
};

export type Review = {
  difficulty: number;
  reviewed_on: number;
  comment: string;
  author_id: number;
};
