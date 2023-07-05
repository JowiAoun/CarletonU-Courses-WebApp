import '../styles/styles.css'

import CourseCard from '../components/CourseCard';

export default function Courses() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full p-96">
          <CourseCard name="MATH1007" definition="First year calc class"/>
          <CourseCard name="COMP1405" definition="First year CS class"/>
        </div>
      </div>
    </>
  );
}