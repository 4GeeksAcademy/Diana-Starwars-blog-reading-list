import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CardCharacters = ({ character }) => {
  //  const params = useParams();
  //  fetch().then.then.catch()
  const { id, name, description1, description2, description3, image } = character;
  return (
    <div className="container-fluid">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
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

export default CardCharacters