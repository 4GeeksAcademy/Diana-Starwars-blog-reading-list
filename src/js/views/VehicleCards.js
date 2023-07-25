import React from 'react'
import { useState, useEffect } from "react";
import CardVehicles from '../component/Vehicles/CardVehicles.js'

const VehicleCards = () => {
    const [vehicle, setVehicle] = useState([]);
    const vehiclesAPI = "https://www.swapi.tech/api/vehicles/"

    useEffect(() => {
        fetch(vehiclesAPI)
            .then((response) => response.json())
            .then((data) => {
                const vehicleURLs = data.results.map((result) => result.url);
                // URL de los vehiculos
                Promise.all(
                    vehicleURLs.map((url) =>
                        fetch(url).then((response) => response.json())
                    )
                )
                    .then((vehiclesData) => {
                        // Procesamos la respuesta para obtener los datos que necesitamos
                        const vehicleDetails = vehiclesData.map((data) => ({
                            id: data.result.uid,
                            name: data.result.properties.name,
                            url: data.result.properties.url,
                            image: `https://starwars-visualguide.com/assets/img/vehicles/${data.result.uid}.jpg`,
                            //   description1: `diameter: ${data.result.properties.diameter} m`,
                            //   description2: `population: ${data.result.properties.population} people`,
                            //   description3: `climate: ${data.result.properties.climate} `,
                        }));
                        setVehicle(vehicleDetails);
                        console.log(vehicleDetails)
                    })
                    .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className='d-flex overflow-auto'>
            {vehicle.map((vehicle) => (
                <div className="col" style={{ flex: '0 0 33.33%' }} key={vehicle.id}>
                    <CardVehicles id={vehicle.id}
                        name={vehicle.name}
                        description1={vehicle.description1}
                        description2={vehicle.description2}
                        description3={vehicle.description3}
                        image={vehicle.image} /></div>
            ))}
            <hr></hr>
        </div>
    )
}

export default VehicleCards