import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CoursesProvider } from "./CoursesContext";
import { AccountProvider } from "./AccountContext";

function ListItem(item) {
  return (
    <li className="nav-item">
      <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
        <i className="fab fa-facebook-square text-3xl leading-lg text-white opacity-75"></i>
        <NavLink className="text-xl" to={item.link}>
          {item.term}
        </NavLink>
      </div>
    </li>
  );
}
function List() {
  const [navbarOpen] = React.useState(false);
  return (
    <>
      <div
        className={
          "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <ListItem link="/" term="Search" />
          <ListItem link="/courses" term="Courses" />
          <ListItem link="/about" term="About" />
          <ListItem link="/course" term="Course" />
          <ListItem link="/login" term="Login" />
        </ul>
      </div>
    </>
  );
}

function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
            CarleonU Courses App
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <List />
      </div>
    </nav>
  );
}

export default function RootLayout() {
  const backgroundImageURL =
    "https://around.uoregon.edu/sites/default/files/styles/landscape_xl/public/field/image/lecture_hall-shutterstock.jpg?itok=9flpJ22p";
  return (
    <div className="flex justify-center items-center h-screen">
      <CoursesProvider>
        <AccountProvider>
          <div
            className="bg-cover bg-center h-full w-full"
            style={{ backgroundImage: `url(${backgroundImageURL})` }}
          >
            <div className="backdrop-blur-sm backdrop-brightness-50">
              <NavBar />
              <main>
                <Outlet />
              </main>
            </div>
          </div>
        </AccountProvider>
      </CoursesProvider>
    </div>
  );
}
