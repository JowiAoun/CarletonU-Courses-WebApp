import './styles/styles.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import SearchPage from "./pages/SearchPage"
import Courses from './pages/CoursesPage'
import About from "./pages/AboutPage"

//layouts
import RootLayout from './components/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SearchPage />} />
      <Route path="courses" element={<Courses />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}