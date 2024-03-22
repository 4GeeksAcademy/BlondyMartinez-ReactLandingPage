import React from "react";

import Header from "./navbar"
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Header />
			<div className="container-fluid wrapper">
				<Jumbotron />
				<div className="row">
					<div className="col-lg-8 col-md-10 col-sm-10 mx-auto my-3">
						<div className="row g-3">
							<Card />
							<Card />
							<Card />
							<Card />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
