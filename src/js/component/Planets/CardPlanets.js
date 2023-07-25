import React from 'react'
import { Link, useParams } from 'react-router-dom';


const CardPlanets = ({ id, name, description1, description2, description3, image }) => {
    const fallbackImage = "https://static.wikia.nocookie.net/kotor/images/d/df/Tatooine-planeta.jpg/revision/latest/scale-to-width-down/220?cb=20100311171406&path-prefix=es"

    return (
        <div className="container-fluid">
            <div className="card" style={{ width: "18rem" }}>
                <img src= {image || fallbackImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {description1}
                    </p>
                    <p className="card-text">
                        {description2}
                    </p>
                    <p className="card-text">
                        {description3}
                    </p>
                    <Link to={`/Planetas/${id}`}>
                        <span className="btn btn-primary btn-lg" role="button">
                            Click here to know more!
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardPlanets