import React from "react";
import {Film} from "../film/components.jsx";
import {Review} from "../review/components.jsx";
import styles from "./components.module.css"

export const Cinema = ({cinema}) => {
  return (
    <section>
      <h2>Кинотеатр: {cinema.name}</h2>
      <section>
        <h3><b>Сеансы</b> :</h3>
        <ul className={styles.list}>
          {cinema.films.map((film) => (
              <Film key={film.id} film={film}/>
            )
          )}
        </ul>
      </section>
      <section>
        <h3>Отзывы</h3>
        <ul className={styles.list}>
          {cinema.reviews.map((review) => (
            <Review key={review.id} review={review}/>
          ))}
        </ul>
      </section>
    </section>
  )
}