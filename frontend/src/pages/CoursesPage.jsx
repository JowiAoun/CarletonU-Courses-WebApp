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
/*
code: "yolo"
section_type: "inPerson"
term: "Fall"
year_standing: "firstYear"
_id: "64c0a4aec251b6a3b46ea071"
 */
/*
<li key={course._id}>
          {course.code} - {course.term}
        </li>
        {Courses.map((data) => (
          // eslint-disable-next-line react/jsx-key
          <CourseCard
            code={data.code}
            name={"will fill in later"}
            definition={"will fill in later"}
          />
        ))}
        */
