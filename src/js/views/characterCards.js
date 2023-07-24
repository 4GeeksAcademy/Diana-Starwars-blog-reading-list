import React from 'react'
import { useState, useEffect } from "react";
import CardCharacters from '../component/Characters/CardCharacters.js';

const CharacterCards = () => {

  const [character, setCharacter] = useState([]);
  const charactersAPI = "https://www.swapi.tech/api/people/"

  useEffect(() => {
    fetch(charactersAPI)
      .then((response) => response.json())
      .then((data) => {
        const characterURLs = data.results.map((result) => result.url);

        // URL de los personajes
        Promise.all(
          characterURLs.map((url) =>
            fetch(url).then((response) => response.json())
          )
        )
          .then((charactersData) => {
            // Procesamos la respuesta para obtener los datos que necesitamos
            const characterDetails = charactersData.map((data) => ({
              id: data.result.uid,
              name: data.result.properties.name,
              url: data.result.properties.url,
              image: `https://starwars-visualguide.com/assets/img/characters/${data.result.uid}.jpg`,
              description1: `Height: ${data.result.properties.height} cm`,
              description2: `Mass: ${data.result.properties.mass} kg`,
              description3: `Eye color: ${data.result.properties.eye_color} `,

            }));

            setCharacter(characterDetails);

          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);




  return (
    <div className='d-flex overflow-auto'>
      {character.map((character) => (
        <div className="col" style={{ flex: '0 0 33.33%' }} key={character.id}>
          <CardCharacters character={character} /></div>

      ))}
      <hr></hr>
    </div>
  )
}

export default CharacterCards;