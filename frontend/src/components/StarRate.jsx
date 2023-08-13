import "../styles/styles.css";
import { useState } from 'react';



export default function StarRate(){
   const [starCount,setSelectedStars] = useState(0); 
   return(
    [...Array(5)].map((star,index)=>{
        return <span key={index} className={`${index+1 <= starCount  ? 'selected' : 'Nothing'}`} onClick={()=>{setSelectedStars(index+1)}}>&#9733;</span>}
    ));
}