import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from '../component/Card.js';

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
        <div className='d-flex'>
            {character.map((character) => (
                <Card key={character.id} character={character} />
            ))}
            <hr></hr>
        </div>
    )
}

export default CharacterCards;