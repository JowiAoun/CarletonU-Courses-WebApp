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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SearchPage />} />
      <Route path="courses" element={<Courses />} />
      <Route path="about" element={<About />} />
      <Route path="course" element={<SpecificCoursePage />} />
    </Route>
  )
);

export default function App() {
  return (
    <>
      <CoursesProvider>
        <RouterProvider router={router} />
      </CoursesProvider>
    </>
  );
}
