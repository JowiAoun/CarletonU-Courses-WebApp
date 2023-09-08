import "../styles/styles.css";
import { useContext, useEffect } from "react";
import { CoursesContext, CoursesProvider } from "../components/CoursesContext";
import { useNavigate } from "react-router";
import Filters from "../components/Filters";

function Title() {
  return (
    <div className="">
      <h1 className="text-blue-400 font-bold text-center flex self-end text-5xl m-auto">
        CarletonU Courses
      </h1>
    </div>
  );
}

function SearchBarAndButton() {
  return (
    <div className="p-2">
      <div className="flex self-start m-auto">
        <input
          type="search"
          name="searchBar"
          id="searchBar"
          className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button className="block w-1/3 rounded-lg bg-indigo-500">Search</button>
      </div>
    </div>
  );
}



export default function SearchPage() {
  const { courses, setCourses } = useContext(CoursesContext);
  const navigate = useNavigate(); // Initialize useHistory

  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var form = event.target;
    var formData = new FormData(form);
    const formDataJSON = {};

    formData.forEach((value, key) => {
      formDataJSON[key] = value;
    });

    const query = `
    query FindCourses {
      findCourses(code: "${formDataJSON.searchBar}") {
          code
          subject
          credits
          ltitle
          description
          precludes
          prereqs
          schedule_general
          also_listed_as
      }
    }
    `;

    const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: query }),
    };

    fetch("http://localhost:5000/graphql", requestOptions)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => data.data.findCourses) // Select the relevant data from the response
    .then(parsedData => {
      console.log('Response:', parsedData);
      setCourses(parsedData);
      navigate("/courses");
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors
    });
  }

  useEffect(() => {
    console.log(courses); // Log the updated courses state whenever it changes
  }, [courses]); // The useEffect hook will re-run whenever "courses" state changes

  return (
    <div>
      <CoursesProvider>
        <form
          className="flex flex-col items-center pt-60 min-h-screen"
          onSubmit={submitForm}
        >
          <Title />
          <SearchBarAndButton />
          <Filters />
        </form>
      </CoursesProvider>
    </div>
  );
}
