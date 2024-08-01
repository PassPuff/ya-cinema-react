import React, {useState} from 'react';
import {Cinema} from "../cinema/components.jsx";

const Cinemas = ({cinemas}) => {
  const [selectCinema,setSelectCinema] = useState(0)

  return (
    <>
      {cinemas.map((cinema, index) => (
        <button
          onClick={() => setSelectCinema(index)}
          key={cinema.id}>
          {cinema.name}
        </button>
      ))}
      <Cinema key={cinemas[selectCinema].id} cinema={cinemas[selectCinema]}/>
    </>
  )
}


export default Cinemas
