type CourseActive = {
  crn: number,
  code: string,
  term_code: string,
  section?: string,
  level: string,
  status: string,
  description?: string,
  schedule?: string,
  section_type?: string,
  additional_info?: string,
  also_register_in?: string,
  title: string,
  ltitle: string,
  credits?: number,
  full_session_info?: string,
  has_prereqs: number,
  has_restrictions: number,
  instructor?: Instructor,
  meeting_date?: string,
  days?: string[],
  time_start?: string,
  time_end?: string,
  building?: string,
  room?: string,
  saved_on: number
};

type Instructor = {
  name: string,
  link: string,
  rating: number,
  num_ratings: number,
};

export default CourseActive;