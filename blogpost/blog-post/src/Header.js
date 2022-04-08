const Header = ({ title, changeLanguage }) => {
    return (
        <header className="Header">
            <h1>{title}</h1>
            <div>
                <button onClick={changeLanguage("en")}>English</button> 
                <button onClick={changeLanguage("hi")}>हिन्दी</button>
            </div>
        </header>
    )
}

export default Header