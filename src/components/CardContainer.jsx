import React from "react";
import Player from "./Player";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import bgLogo from "../assets/gs.jpg";

const CardContainer = () => {
	return (
		<Container className="card-container mt-4">
			<Image
				fluid
				className="rounded-5"
				src={bgLogo}
				width="700px"
			></Image>
			<Player />
		</Container>
	);
};

export default CardContainer;
