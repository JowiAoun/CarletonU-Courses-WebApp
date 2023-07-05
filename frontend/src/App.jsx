import './styles/styles.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Search from "./pages/Search"
import Courses from './pages/Courses'

//layouts
import RootLayout from './components/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Search />} />
      <Route path="courses" element={<Courses />} />
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