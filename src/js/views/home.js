import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link, useParams } from "react-router-dom";
import CharacterCards from "./characterCards.js";
import "../../styles/home.css";

export const Home = () => {


	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>

			<Link to="/Tarjeta/2">
				<span className="btn btn-primary btn-lg" role="button">
					TEMPORAL LINK TO /CARD
				</span>
			</Link>

			<div>
				<CharacterCards/>
			</div>
		</div>
	);
}
