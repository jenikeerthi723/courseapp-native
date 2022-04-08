import React from 'react';
import B from "./B";

const A = ({myname}) => { // destructuring
  return (
    <div>
        <h1>my name is {myname}: comp A</h1>
        <B myname="keerthi" />

    </div>
  )
}

export default A