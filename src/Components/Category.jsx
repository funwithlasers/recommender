function Category({ title, src }) {

    return(
        <div>
            <h1>{title}</h1>
            <img src={src} alt={title}></img>
        </div>
    )
}

export { Category }