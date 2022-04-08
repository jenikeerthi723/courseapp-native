import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const Missing = () => {
    const {t} = useTranslation();
    return (
        <main className='Missing'>
            <h2>{t("pgntfound")}</h2>
            {/* <p>Well, that's disappointing.</p> */}
            <p>
                <Link to='/'>{t("homelink")}</Link>
            </p>
        </main>
    )
}

export default Missing