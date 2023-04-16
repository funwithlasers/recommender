import "bulma/css/bulma.css";

function Recommendation({ title, author, image, description, publishDate }) {
  return (
    <div>
      <div className="card">
        <div className="cardImage">
          <figure className="image is-2by4">
            <img src={image} alt={title}></img>
          </figure>
        </div>
      </div>
      <div className="cardContent">
        <div className="mediaContent">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{author}</p>
        </div>
        <div class="content">
          {description}
          {/*
          <br />
          <time datetime={publishDate}>{publishDate}</time>
          */}
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
