import React,{createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//with contextApi
// app com data pass to(C comp) direct 

const Language = createContext(); // create context store data in language 1 st   [datalayers]
const FrontEnd = createContext(); // another data also pass 2nd


ReactDOM.render(
  <>
    <Language.Provider value={"Reactjs"}>  
    <FrontEnd.Provider value={"html"}>
    <App />
    </FrontEnd.Provider>
    </Language.Provider>  

    {/* {/* app comp( wrap provider ) */}
    
  </>,
  document.getElementById('root')
);

export {Language,FrontEnd};