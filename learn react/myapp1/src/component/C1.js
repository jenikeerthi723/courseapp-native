import React,{useContext} from 'react'
import { Language ,FrontEnd } from '../index.js';

// c consumer
const C1 = () => {
 
     const Lang = useContext(Language); // language data
     const Fe  =   useContext(FrontEnd);
  return (
    <div>

   {/*1 st code <Language.Consumer >{(lang) =>{
       return(
      <FrontEnd.Consumer>
          {(frontend) =>{
              return <h1>{frontend} used for website creating {lang}</h1>
          }
          }
      </FrontEnd.Consumer>
       )}
        }
   </Language.Consumer> */} 
    {/* instead writing long code use hooks(useContext) */}
  

  {/* code reduce using (useContext) hook */}

  {/* // consumer always function use */}

  <h1>{Fe} used for website creating and {Lang} used for js library</h1> 
  {/* 2nd code // usecontext code reduce like this */}
    </div>
  )
}

export default C1