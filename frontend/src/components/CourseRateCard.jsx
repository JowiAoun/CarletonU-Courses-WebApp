import "../styles/styles.css";
import StarRate from "./StarRate";


export default function CourseRateCard(){
    return(
   <div className= "pt-5 px-96"> 
     <div className="block py-10 px-10 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="pb-20 cursor-pointer">
            <h1 className="text-2xl text-white font-sans ">Rating: <StarRate/></h1>
            
        </div>
        <div>
            
        </div>
        <div className="w-full pb-10">
          <textarea placeholder= "Type your comment here" className="block h-80 w-full pl-5 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
        </div>
        <div>
          <button className="block w-full pl-5 text-lg text-gray-900 border border-gray-300 rounded-lg bg-blue-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-sans hover:bg-gray-400 transition hover:delay-75">Submit</button>
        </div>
        
        
     </div>
   </div>    
      );
  }