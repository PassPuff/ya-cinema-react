import { useState } from "react";
import { Cinema } from "../cinema/components.jsx";
import styles from "./components.module.css";
import clsx from "clsx";

const Cinemas = ({ cinemas }) => {
  const [selectCinema, setSelectCinema] = useState(0);

  const cinema = cinemas[selectCinema];
  return (
    <div className="container">
      {cinemas.map((cinema, index) => (
        <button
          className={clsx(index === selectCinema && styles.active, styles.btn)}
          onClick={() => setSelectCinema(index)}
          key={cinema.id}
        >
          {cinema.name}
        </button>
      ))}
      <Cinema key={cinema.id} cinema={cinema} />
    </div>
  );
};

export default Cinemas;
