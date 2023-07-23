import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Card = ({ character }) => {
  const {id, name, description, image} = character;
  return (
    <div className="container-fluid">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description}
          </p>
          <Link to={`/Tarjeta/${id}`}>
            <span className="btn btn-primary btn-lg" role="button">
              Click here to know more!
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Card