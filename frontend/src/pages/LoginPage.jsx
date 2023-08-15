import "../styles/styles.css";
import { useContext, useEffect } from "react";
import { AccountContext, AccountProvider } from "../components/AccountContext";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const { account, setAccount } = useContext(AccountContext);
  const navigate = useNavigate(); // Initialize useHistory

  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var form = event.target;
    var formData = new FormData(form);
    const formDataJSON = {};
    var parsedData = "hi";

    formData.forEach((value, key) => {
      formDataJSON[key] = value;
    });
    //new version
    // Make an API request using fetch or XMLHttpRequest

    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataJSON),
    })
      .then((response) => response.json())
      .then((data) => {
        // Access the response data here
        //console.log(data);
        //parsedData = JSON.parse(data);
        const { token } = data;

        // Set the cookie with the token
        document.cookie = `authToken=${token}; path=/; secure; sameSite=strict`;
        console.log(document.cookie);
        navigate("/");
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  }

  useEffect(() => {
    console.log(account); // Log the updated account state whenever it changes
  }, [account]); // The useEffect hook will re-run whenever "account" state changes

  return (
    <>
      <div>
        <AccountProvider>
          <form onSubmit={submitForm}>
            <div className="pt-11 px-96">
              <a className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Username
                </h5>
                <div className="p-2">
                  <div className="flex self-start m-auto">
                    <input
                      name="userName"
                      id="userName"
                      className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Password
                </h5>
                <div className="p-2">
                  <div className="flex self-start m-auto">
                    <input
                      name="password"
                      id="password"
                      className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="block h-10 w-1/3 rounded-lg bg-indigo-500">
                    Log In
                  </button>
                </div>
                <a className="text-white" href="/register">
                  Sign Up!
                </a>
              </a>
            </div>
          </form>
        </AccountProvider>
      </div>
    </>
  );
}
