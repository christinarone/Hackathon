import React from 'react'

const News = (props) => {

    const {title, created_at, author, url, points, comments} = props;

    return (
        <article className="articleContainer">
            <a className="title" href={url}>{title}
                <div className="storyLink">({url})</div>
            </a>
            <div className="points">{points} points
                <div className="author">Author: {author}</div>
                <div className="published">Published: {created_at}</div>
                <div className="comments">Comments: {comments}</div>
            </div>
        </article>
    )
}

export default News;