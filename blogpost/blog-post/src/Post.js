// import { t } from 'i18next';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const Post = ({ post }) => {
    const {t} = useTranslation();
    return (
        <article className="post">
            <Link to={`post/${post.id}`}>
                <h2>{t([post.title])}</h2>
                <p className="postDate">{post.datetime}</p>
            </Link>
            <p className="postBody">{
                (post.body).length <= 25
                    ? post.body
                    : `${(post.body).slice(0, 25)}...`
            }</p>
        </article>
    )
}

export default Post

// {post.title}