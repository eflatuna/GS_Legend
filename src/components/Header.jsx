import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../assets/GS.png";

const Header = () => {
	return (
		<Container>
			<Image src={logo}></Image>
		</Container>
	);
};

export default Header;
