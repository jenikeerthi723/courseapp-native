// import { t } from 'i18next';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const Nav = ({ search, setSearch }) => {
    const {t} = useTranslation();
    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <input
                    id="search"
                    type="text"
                    placeholder={t("searchplace")}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li><Link to="/">{t("homenav")}</Link></li>
                <li><Link to="post">{t("postnav")}</Link></li>
                <li><Link to="about">{t("aboutnav")}</Link></li> 
            </ul>
        </nav>
    )
}

export default Nav