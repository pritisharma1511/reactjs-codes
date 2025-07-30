export const SeriesCard = ({data}) => {
    // eslint-disable-next-line no-unused-vars
    const{ id,name, rating, description, genre, cast, img_url, watch_url} = data;
    const btn_style = {
      padding: "1.2rem 2.4rem",
      border:"none",
      fontSize: "1.6rem",
      backgroundColor: rating >= 8.5 ? "#7dcea0" : "#f7dc67",
      color: "var(--bg-color)",
      fontWeight: "bold",
      cursor: "pointer",
    };

    const ratingClass = rating >= 8.5 ? "super_hit" : "average";

  return (
        <li className="card">
          <div>
            <img
              src={img_url}
              alt={name}
              width="40%"
              height="40%"/>
          </div>
          <div className="card-content">
          <h2>Name: {name}</h2>
          <h3>
            Rating:
            <span className={` rating ${ratingClass}`}>{rating}</span>
          </h3>
          <p>Summary: {description}</p>
          <p>Genre: {genre.join(", ")}</p>
          <p>Cast: {cast.join(", ")}</p>
          <a
            href={watch_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={btn_style}>Watch Now</button>
          </a>
          </div>
        </li>
      )};


