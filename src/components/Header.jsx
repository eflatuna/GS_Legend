import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../assets/GS.png";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Header = () => {
	return (
		<Container>
			<Image src={logo}></Image>
			<h1 style={{ fontSize: "3rem" }}>GALATASARAY LEGEND</h1>
			<InputGroup className="mb-5 w-50 m-auto">
				<Form.Control
					placeholder="Search Player"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
				/>
			</InputGroup>
		</Container>
	);
};

export default Header;
