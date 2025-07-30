export const SeriesCard = ({data}) => {
    // eslint-disable-next-line no-unused-vars
    const{ id,name, rating, description, genre, cast, img_url, watch_url} = data;
  return (
        <li>
          <img
            src={img_url}
            alt={name}
            width="40%"
            height="40%"
          />
          <h2>Name: {name}</h2>
          <h3>Rating: {rating}</h3>
          <p>Summary: {description}</p>
          <p>Genre: {genre.join(", ")}</p>
          <p>Cast: {cast.join(", ")}</p>
          <a
            href={watch_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Watch Now</button>
          </a>
        </li>
      )};


