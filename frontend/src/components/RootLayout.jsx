import React from "react";
import {NavLink, Outlet} from "react-router-dom"
function ListItem(item) {
    return (
        <>
          <li className="nav-item">
                <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <NavLink to={item.link}>{item.term}</NavLink>
                </a>
            </li>
        </>
    );
}
function List() {
    const [navbarOpen] = React.useState(false);
    return (
        <>
            <div
            className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
            >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <ListItem link="/" term="Search" />
                    <ListItem link="/courses" term="Courses" />
                    <ListItem link="/about" term="About" />
                </ul>
            </div>
        </>
      );
}

export default function RootLayout(){
    const backgroundImageURL = "https://around.uoregon.edu/sites/default/files/styles/landscape_xl/public/field/image/lecture_hall-shutterstock.jpg?itok=9flpJ22p";
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return(
        <>
            <div className="flex justify-center items-center h-screen">
                <div
                className="bg-blur-md bg-cover bg-center h-full w-full"
                style={{
                backgroundImage: `url(${backgroundImageURL})`,
                }}>
                    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
                        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                                <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
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
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}