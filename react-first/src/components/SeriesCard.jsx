import styles from './Netflix.module.css';
import styled from 'styled-components';

export const SeriesCard = ({data}) => {
    // eslint-disable-next-line no-unused-vars
    const{ id,name, rating, description, genre, cast, img_url, watch_url} = data;
    // const btn_style = {}

      const ButtonThapa = styled.button({
      padding: "1.2rem 2.4rem",
      border:"none",
      fontSize: "1.6rem",
      backgroundColor: rating >= 8.5 ? "#7dcea0" : "#f7dc67",
      color: "var(--bg-color)",
      fontWeight: "bold",
      cursor: "pointer",

      });
     const Rating = styled.h3`
      font-size: 1.6rem;
      color:#7dcea0;
      text-transform: capitalize;
      `;



     

    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
        <li className={styles.card}>
          <div>
            <img
              src={img_url}
              alt={name}
              width="40%"
              height="40%"/>
          </div>
          <div className={styles["card-content"]}>
          <h2>Name: {name}</h2>
          <Rating>
            Rating:
            <span className={` ${styles.rating} ${ratingClass}`}>{rating}</span>
          </Rating>
          <p>Summary: {description}</p>
          <p>Genre: {genre.join(", ")}</p>
          <p>Cast: {cast.join(", ")}</p>
          <a
            href={watch_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <button style={btn_style}>Watch Now</button> */}
            <ButtonThapa>Watch Now</ButtonThapa>
          </a>
          </div>
        </li>
      )};


