import "../styles/styles.css";

import CourseCard from "../components/CourseCard";
import React, { useContext, useEffect, useState } from "react";
import { CoursesContext } from "../components/CoursesContext";

const CoursesPage = () => {
  const { courses } = useContext(CoursesContext);
  
  return (
    <div className="w-full pt-20 px-96">
      {courses.map((course) => (
        <CourseCard
          code={course.code}
          name={"will fill in later"}
          definition={"will fill in later"}
        />
      ))}
    </div>
  );
};

export default CoursesPage;