import { Skeleton } from "@mui/material";
import React from "react";


const Loader = () =>{

    return(
        <Skeleton height={300} width={200}/>
    )
}


const Rowloader = () =>{
    return new Array(4).fill(0).map((i, ind)=>  <Loader key={ind}/> )
}

export {Rowloader}
export default Loader