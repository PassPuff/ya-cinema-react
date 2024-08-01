import {useState} from "react";
import styles from "./components.module.css"

export const Film = ({film}) => {
  const [countTickets,setCountTickets ] = useState(0)

  return (
    <li className={styles.item} key={film.id}>
      <h3>{film.name}</h3>

      <div>
        <p><b>Актеры:</b></p>
        {film.actors.map((actor, index) => (
            <p key={actor + index}>{actor}</p>
          )
        )}
      </div>
      <p>{film.price} $</p>
      <button
        disabled={countTickets === 0}
        onClick={() => setCountTickets(countTickets - 1)}> -
      </button>
      <span>{countTickets}</span>
      <button
        disabled={countTickets === 6}
        onClick={() => setCountTickets(countTickets + 1)}> +
      </button>

    </li>
  )
}