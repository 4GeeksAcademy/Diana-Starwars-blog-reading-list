import React from 'react';

import { Link, useParams } from 'react-router-dom';
import Card from './Card.js';

const CardInfo = ({ }) => {
    const { id } = useParams();

    //  const params = useParams();
    //  fetch().then.then.catch()
    return (
        <div>
            <p>
                Hola, soy {id}
            </p>
            <Link to="/">
                <span className="btn btn-primary btn-lg" role="button">
                    TEMPORAL LINK TO HOME
                </span>
            </Link>
        </div>
    )
}

export default CardInfo