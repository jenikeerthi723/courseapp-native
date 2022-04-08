import Feed from './Feed';
import { useTranslation } from 'react-i18next'

const Home = ({ posts }) => {
    const {t} = useTranslation();
    return (
        <main className="Home">
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    {t("noposts")}
                </p>
            )}
        </main>
    )
}

export default Home