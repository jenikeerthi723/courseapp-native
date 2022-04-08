import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
// import { useContext } from 'react';
// import DataContext from './context/DataContext';

const Header = ({ title, changeLanguage, width }) => {

    // const { width } = useContext(DataContext);
      
    return (
        <header className="Header">
            <div className="Header-title-div">
                <h1>{title}</h1>
                <div className='Header-icon-div'>
                { width < 768 ? <FaMobileAlt className='Header-icon' />
                        : width < 992 ? <FaTabletAlt className='Header-icon' /> 
                        : <FaLaptop className='Header-icon' />
                        
                }
                </div>
            </div>
            <div>
                <button onClick={changeLanguage("en")}>English</button> 
                <button onClick={changeLanguage("hi")}>हिन्दी</button>

                
            </div>
        </header>
    )
}

export default Header