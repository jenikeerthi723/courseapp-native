import { useTranslation } from 'react-i18next'

const NewPost = ({
    handleSubmit, postTitle, setPostTitle, postImage, setPostImage, postBody, setPostBody
}) => {
    const {t} = useTranslation();
    return (
        <main className="NewPost">
            <h2>{t("newpost")}</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postImage">{t("img")}</label>
                <input
                    id="postImage"
                    type="file"
                    required
                    value={postImage}
                    onChange={(e) => setPostImage(e.target.value)}
                />
                <label htmlFor="postTitle">{t("title")}</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">{t("post")}</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button type="submit">{t("submit")}</button>
            </form>
        </main>
    )
}

export default NewPost