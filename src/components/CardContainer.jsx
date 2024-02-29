import React from "react";
import Player from "./Player";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
// import bgLogo from "../assets/gs.jpg";
import { data } from "../helper/data";

const CardContainer = () => {
	console.log(data);
	return (
		<Container className="card-container mt-4 p-4">
			{/* <Image
				fluid
				className="rounded-5"
				src={bgLogo}
				width="700px"
			></Image> */}
			{/* <h1 className="text-white my-4">Players</h1> */}
			<Row className="g-3">
				{data.map((p, index) => {
					return (
						<Col sm={6} md={4} lg={3} key={index}>
							<Player {...p} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default CardContainer;
