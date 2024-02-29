import React, { useState } from "react";
import Player from "./Player";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
// import bgLogo from "../assets/gs.jpg";
import { data } from "../helper/data";
// import Header from "./Header";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const CardContainer = () => {
	const [searchInput, setSearchInput] = useState("");
	const handleInputChange = (e) => {
		setSearchInput(e.target.value);
	};
	// console.log(data);
	return (
		<Container className="card-container mt-4 p-4">
			<InputGroup className="mb-5 w-50 m-auto">
				<Form.Control
					placeholder="Search Player"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
					onChange={handleInputChange}
				/>
			</InputGroup>
			{/* <Header setSearchInput={setSearchInput} /> */}
			{/* <Image
				fluid
				className="rounded-5"
				src={bgLogo}
				width="700px"
			></Image> */}
			{/* <h1 className="text-white my-4">Players</h1> */}
			<Row className="g-3">
				{data
					.filter((player) => {
						return player.name
							.toLowerCase()
							.includes(searchInput.toLowerCase());
					})
					.map((p, index) => {
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
