import { useParams, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'


const PostPage = ({ posts, handleDelete }) => {
    const {t} = useTranslation();
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    return (
        <main className="PostPage">
            <article className="post">
                {post &&
                    <>
                        <img src={post.image} alt="IMAGE_NOT_THERE" width="400" height="250" />
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <button onClick={() => handleDelete(post.id)}>
                            {t("delbut")}
                        </button>
                    </>
                }
                {!post &&
                    <>
                        <h2>{t("pnfpostpage")}</h2>
                        <p>
                            <Link to='/'>{t("homelink")}</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage