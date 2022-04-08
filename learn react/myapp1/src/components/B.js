import React from 'react'
import C from "./C";
const B=({myname}) =>{
  return (
    <div>
        <h1>im B comp {myname}</h1>
        <C myname="keerthi" />
    </div>
  )
}

export default B  


// parent to child props pass A,B,C 
// more comp it diffcult handle ,so we r using context api.
//particular pt props driiling
