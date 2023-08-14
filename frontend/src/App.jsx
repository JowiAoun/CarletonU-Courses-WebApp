import "./styles/styles.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import Courses from "./pages/CoursesPage";
import SpecificCoursePage from "./pages/SpecificCoursePage";
import About from "./pages/AboutPage";

//layouts
import RootLayout from "./components/RootLayout";
import { CoursesProvider } from "./components/CoursesContext";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { AccountProvider } from "./components/AccountContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SearchPage />} />
      <Route path="courses" element={<Courses />} />
      <Route path="about" element={<About />} />
      <Route path="course" element={<SpecificCoursePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegistrationPage />} />
    </Route>
  )
);

export default function App() {
  return (
    <>
      <CoursesProvider>
        <AccountProvider>
          <RouterProvider router={router} />
        </AccountProvider>
      </CoursesProvider>
    </>
  );
}
