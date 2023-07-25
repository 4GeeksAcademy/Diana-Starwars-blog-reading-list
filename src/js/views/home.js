import React from "react";
import CharacterCards from "./characterCards.js";
import PlanetCards from "./planetCards.js";
import VehicleCards from "./VehicleCards.js";
import "../../styles/home.css";


export const Home = () => {


	return (
		<div className="container">
			<div>
				<CharacterCards />
			</div>
			<div>
				<PlanetCards />
			</div>
			<div>
				<VehicleCards />
			</div>
		</div>
	);
}
