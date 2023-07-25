import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const InfoVehicles = () => {
    const [vehicle, setVehicle] = useState({})
    const params = useParams();

    useEffect(() => {
        fetch("https://www.swapi.tech/api/vehicles/" + params.idCard).then((response) => response.json()).then((data)=> {
            setVehicle(data.result.properties),
            console.log(data.result.properties)}).catch(err=>err)}, [])
  return (
    <div>
    <p>
        Hola, mi id es: {params.idCard} y mi nombre es {vehicle.name} 
    </p>
    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.idCard}.jpg`} />
    <Link to="/">
        <span className="btn btn-primary btn-lg" role="button">
            TEMPORAL LINK TO HOME
        </span>
    </Link>
</div>
  )
}

export default InfoVehicles