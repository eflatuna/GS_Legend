import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
const Player = ({ name, img, statistics }) => {
	const [show, setShow] = useState(false);
	console.log(show);
	return (
		<Container
			style={{ backgroundColor: "white", height: "300px" }}
			className="p-4 rounded-2"
		>
			<div>
				<Image
					className="img"
					src={img}
					width="100%"
					height="200px"
					onClick={() => setShow(!show)}
				></Image>
				<h3 className="display-6" style={{ fontSize: "1.3rem" }}>
					{name}
				</h3>
			</div>
			<ul>
				{statistics.map((item) => {
					return <li className="h5 text-start">{item}</li>;
				})}
			</ul>
		</Container>
	);
};

export default Player;
