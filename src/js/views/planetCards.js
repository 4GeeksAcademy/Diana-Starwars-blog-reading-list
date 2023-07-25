import React from 'react'
import { useState, useEffect } from "react";
import CardPlanets from '../component/Planets/CardPlanets.js'

const PlanetCards = () => {

    const [planet, setPlanet] = useState([]);
    const planetsAPI = "https://www.swapi.tech/api/planets/"

    useEffect(() => {
        fetch(planetsAPI)
            .then((response) => response.json())
            .then((data) => {
                const planetURLs = data.results.map((result) => result.url);
                // URL de los personajes
                Promise.all(
                    planetURLs.map((url) =>
                        fetch(url).then((response) => response.json())
                    )
                )
                    .then((planetsData) => {
                        // Procesamos la respuesta para obtener los datos que necesitamos
                        const planetDetails = planetsData.map((data) => ({
                            id: data.result.uid,
                            name: data.result.properties.name,
                            url: data.result.properties.url,
                            image: `https://starwars-visualguide.com/assets/img/planets/${data.result.uid}.jpg`,
                            description1: `diameter: ${data.result.properties.diameter} m`,
                            description2: `population: ${data.result.properties.population} people`,
                            description3: `climate: ${data.result.properties.climate} `,
                        }));
                        setPlanet(planetDetails);
                        console.log(planetDetails)
                    })
                    .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className='d-flex overflow-auto'>
            {planet.map((planet) => (
                <div className="col" style={{ flex: '0 0 33.33%' }} key={planet.id}>
                    <CardPlanets id={planet.id}
                        name={planet.name}
                        description1={planet.description1}
                        description2={planet.description2}
                        description3={planet.description3}
                        image={planet.image} /></div>
            ))}
            <hr></hr>
        </div>
    )
}

export default PlanetCards