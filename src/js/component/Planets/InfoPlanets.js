import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const InfoPlanets = () => {
    const [planet, setPlanet] = useState({})
    const params = useParams();


    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/" + params.idCard).then((response) => response.json()).then((data)=> {
            setPlanet(data.result.properties),
            console.log(data.result.properties)}).catch(err=>err)}, [])

    return (
        <div>
            <p>
                Hola, mi id es: {params.idCard} y mi nombre es {planet.name} 
            </p>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${params.idCard}.jpg`} />
            <Link to="/">
                <span className="btn btn-primary btn-lg" role="button">
                    TEMPORAL LINK TO HOME
                </span>
            </Link>
        </div>
    )
}

export default InfoPlanets