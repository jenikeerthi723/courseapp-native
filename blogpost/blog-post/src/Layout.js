import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next'


const Layout = ({ search, setSearch, changeLanguage }) => {
    const {t} = useTranslation();
    return (
        <div className="App">
            <Header title={t("header")} changeLanguage={changeLanguage}/>
            <Nav search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout