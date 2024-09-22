export function Article({title, text}) {
    return (
        <div className="article-card-container">
            <h1 className="article-card-title">{title}</h1>
            <p className="article-card-text">{text}</p>
        </div>
    )
}