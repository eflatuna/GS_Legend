import React from "react";
import bgLogo from "../assets/gs.jpg";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Player = () => {
	return (
		<Container className="card-container">
			<Image fluid rounded src={bgLogo} width="700px"></Image>
		</Container>
	);
};

export default Player;
