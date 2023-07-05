import '../styles/styles.css'

import {NavLink, Outlet} from "react-router-dom"

export default function RootLayout(){
    return(
        <div className="root-layout">
            <header>
                <nav>
                    <h1> CarletonU Courses</h1>
                    <NavLink to="/">Search</NavLink>
                    <NavLink to="courses">Courses</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}