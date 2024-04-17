import { Skeleton } from "@mui/material";
import React from "react";
import "./loader.css"

const Loader = () =>{

    return(
        <Skeleton height={300} width={200}/>
    )
}


const Rowloader = () =>{
    return (
    <div className="loader_container"> 
        {new Array(6).fill(0).map((i, ind) => (
        <Loader key={ind} />
      ) )}
    </div> 
)}

export {Rowloader}
export default Loader