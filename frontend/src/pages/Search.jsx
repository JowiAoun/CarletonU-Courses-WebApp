import '../styles/styles.css'
import {NavLink} from "react-router-dom"

export default function Search() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="">
          <h1 className="text-center flex self-end text-5xl m-auto">CarletonU Courses</h1>
        </div>
        <div className="">
          <div className='flex self-start m-auto'>
            <input 
              type="search" 
              id="default-search" 
              className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Enter a course..."
            />
            <NavLink className='block w-1/3 rounded-lg bg-indigo-500' to="courses">Search</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}