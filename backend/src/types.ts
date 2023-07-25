type Course = {
  crn: number; // 31245
  code: string; // COMP 2401 A
  subject: string; // COMP
  section: string; // A
  title: string; // Intro to Systems Programming
  ltitle?: string; // Introduction to Systems Programming
  desc?: string; // Introduction to system-level programming with fundamental OS...
  desc_additional?: string; // NOT SUITABLE FOR ONLINE STUDENTS. Minimum grade of...
  schedule_type: string; // Lecture
  section_type: string; // IN-PERSON
  building?: string; // Mackenzie Building
  room?: string; // 3380
  term: string; // Fall 2023
  also_register_in?: string[];
  precludes?: string[]; // ['SYSC 2006']
  prereqs?: string; // (COMP 1006 or COMP 1406 or SYSC 2004) with a minimum grade of C-
  credits: number; // 0.5
  instructor?: string[]; // ['Christine Laurendeau', 'rmplink.com/instructor']
  days: string[]; // ['Tue', 'Thu']
  time: string; // 10:05 - 11:25
  year_standing: string; // 2
  restrictions_year?: string[];
  restrictions_level?: string[];
  restrictions_degree?: string[];
  restrictions_major?: string[];
  restrictions_program?: string[];
};

export default Course;