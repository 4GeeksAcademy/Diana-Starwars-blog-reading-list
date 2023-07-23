import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from '../component/Card.js';

const CharacterCards = () => {

    const [charactersData, setCharactersData] = useState([]);

    const charactersAPI = "https://swapi.dev/api/people/"
    useEffect(() => {
        fetch(charactersAPI)
            .then((response) => response.json())
            .then((data) => {
                const characters = data.results.map((result) => ({
                    id: result.ids,
                    name: result.name,
                    image:  `https://startwars-visualguide.com/assets/img/characters/${result.image}`,
                    description: "This is an description example"
                }))          
            setCharactersData(characters)
            .catch((error) => console.error("Error fetching card data:", error));
    })}, []);


    return (
        <div className='d-flex'>
            {charactersData.map((character) => (
                <Card key={character.id} character={character} />
            ))}
            <hr></hr>
        </div>
    )
}

export default CharacterCards;