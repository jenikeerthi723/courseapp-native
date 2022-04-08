import React,{useEffect, useState}from 'react';
import './App.css';
//import A from "./components/A";
//import C1 from './component/C1';
//import B1 from './component/B1';

// without context API , app comp ---> c ,not possible to send data A,B,C
// with context API A1,B1.C1

// React fetch Api
const  App = () =>{
   const [data,setData] =useState([]); // initailly empty pass setdata
   console.log(data); //1 data empty

   useEffect(()=>{
     getData(); // ---> 2 once load website fun call , fetching the api

   },[]) // no need load again & again only once useeffect
   // empty array each time load data dont show ,whenever load show datas
   
   // func create
     const getData = async()=>{
     const response = await fetch ("'https://jsonplaceholder.typicode.com/todos"); // json datas 200 show array
    //  console.log(response);
     const jsonData = await response.json(); // obj show // 3 converting api to obj
    //  console.log(jsonData);
    // whenever load website entire data starting need
    setData(jsonData); // array of object store // 4 update the data
   }
   
 
  return (
   <div>
      {/* // <h1>parent component</h1>

      // <A myname ="keerthi"/> 
      // props pass */}

       {/* <C1 /> */}
       {/* <B1 /> */}

      <h2>React Fetch API</h2>
      <div className="text">
        {data.map((values)=>{ // data empty , using map method // values access all the datas
          return(
            <>
            <h5>{values.title}</h5>
            </>
          ) // values.title ,all the titles print 
        })}
      <h5>Title</h5>
     
    </div>
    </div>
  );
}

export default App;
