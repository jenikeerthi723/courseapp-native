import React from 'react'
import { Language } from '../index.js';

const B1 = () => {
  return (
    <div>
        <Language.Consumer >{(fname) =>{

    return <h1> i am from com B my fav lang is {fname}</h1>
   }}
     </Language.Consumer>

    </div>
  )
}

export default B1