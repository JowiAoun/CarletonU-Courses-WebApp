import "../styles/styles.css";
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

function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  var form = event.target;
  var formData = new FormData(form);
  const formDataJSON = {};

  formData.forEach((value, key) => {
    formDataJSON[key] = value;
  });

  /*
  // Make an API request using fetch or XMLHttpRequest
  fetch('http://localhost:5000/api/search', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    // Handle the API response
    // Redirect the user to a different page
    console.log(response);
    //window.location.href = '/courses';
    console.log(response);
  })
  .catch(function(error) {
    // Handle any errors
    console.error('Error:', error);
  });
  */
  //new version
  // Make an API request using fetch or XMLHttpRequest

  fetch("http://localhost:5000/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataJSON),
  })
    .then((response) => response.text())
    .then((data) => {
      // Access the response data here
      console.log(data); // "success"
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error(error);
    });
  //window.location.href = '/courses';
}

export default function SearchPage() {
  return (
    <div>
      <form
        className="flex flex-col items-center pt-60 min-h-screen"
        onSubmit={submitForm}
      >
        <Title />
        <SearchBarAndButton />
        <Filters />
      </form>
    </div>
  );
}
