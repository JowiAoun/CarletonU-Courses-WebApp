import '../styles/styles.css'
import {NavLink} from "react-router-dom"
import Filters from '../components/Filters'
import { useState } from 'react'

export default function Search() {
  const [searchString, setSearchString] = useState('');

  // Function tos update the string state
  const updateSearchString = (event) => {
    setSearchString(event.target.value);
  };

  async function handleSubmit() {
    const settings = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
          'Accept': 'application/json',
          'Content-Type': '"application/json; charset=utf-8"',
          'Access-Control-Allow-Origin': '*'
      },
      body: searchString
    };
    console.log({searchString});
    let response = await fetch(`http://127.0.0.1:5173/`, settings);
    console.log(response);
  }
  return (
    
      <form className="flex flex-col items-center pt-60 min-h-screen">
        <div className="">
          <h1 className="text-blue-400 font-bold text-center flex self-end text-5xl m-auto">CarletonU Courses</h1>
        </div>
        <div className="p-2">
          <div className='flex self-start m-auto'>
            <input 
            onChange={updateSearchString}
            type="search" 
            id="default-search" 
            className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={searchString}
          />
          <button onClick={handleSubmit}>button</button>
          <NavLink className='block w-1/3 rounded-lg bg-indigo-500' to="courses">Search</NavLink>
          </div>
        </div>
        <Filters/>
      </form>
    
  )
}