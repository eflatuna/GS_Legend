import { FaFutbol, FaHandsHelping, FaStar, FaClock } from "react-icons/fa";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Player = ({ name, img, statistics }) => {
	const [showCards, setShowCards] = useState(false);
	const [isImageHovered, setIsImageHovered] = useState(false);
	// console.log(showCards);
	const handleImageMouseEnter = () => {
		setIsImageHovered(true);
	};
	const handleImageMouseLeave = () => {
		setIsImageHovered(false);
	};
	return (
		<Container
			style={{ backgroundColor: "white", height: "300px" }}
			className="p-4 rounded-2 play-card"
			onClick={() => setShowCards(!showCards)}
		>
			{!showCards && (
				<div>
					<Image
						className={`img ${isImageHovered ? "hovered" : ""}`}
						src={img}
						width="100%"
						height="200px"
						onMouseEnter={handleImageMouseEnter}
						onMouseLeave={handleImageMouseLeave}
					></Image>

					<h3
						className="display-6 mt-4"
						style={{ fontSize: "1.3rem" }}
					>
						{name}
					</h3>
				</div>
			)}

			{showCards && (
				<ul>
					{statistics.map((item, index) => {
						return (
							<li
								style={{
									listStyleType: "none",
								}}
								key={index}
								className="h5 text-start mt-4 "
							>
								{item.includes("Goals") && (
									<FaFutbol style={{ marginRight: "5px" }} />
								)}
								{item.includes("Mins") && (
									<FaClock style={{ marginRight: "5px" }} />
								)}
								{item.includes("Assists") && (
									<FaHandsHelping
										style={{ marginRight: "5px" }}
									/>
								)}
								{item.includes("Apps") && (
									<FaStar style={{ marginRight: "5px" }} />
								)}
								{item}
							</li>
						);
					})}
				</ul>
			)}
		</Container>
	);
};

export default Player;
