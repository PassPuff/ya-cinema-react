import { useState } from "react";
import { Cinema } from "../cinema/components.jsx";

const Cinemas = ({ cinemas }) => {
  const [selectCinema, setSelectCinema] = useState(0);

  const cinema = cinemas[selectCinema];
  return (
    <>
      {cinemas.map((cinema, index) => (
        <button onClick={() => setSelectCinema(index)} key={cinema.id}>
          {cinema.name}
        </button>
      ))}
      <Cinema key={cinema.id} cinema={cinema} />
    </>
  );
};

export default Cinemas;
