import React from "react";

import Navbar from "../../Components/Navbar/";
import Footing from "../../Components/Footer/";

import Main from "../../Components/Main/";
import Projects from "../../Pages/Projects/";
import ThreeJS from "../../Pages/ThreeJS/";
import Discord from "../../Pages/Discord/";
import Profile from "../../Pages/Profile/";

import "./index.css";

class Home extends React.Component {
	constructor(props) {
		super(props);

		// Instead of spreading (...obj) an object by copy, just reference the passed in object.
		// this.state = { page: 1, profile: {...this.props.profile} };
		this.state = { page: 1, profile: this.props.profile }; 
	}

	switchPage = (newPage) => {
		this.setState({page: newPage})
		console.log("Updating page, current state: ", this.state, " newpage: ", newPage);
	}

	determinePage = () => {
		switch(this.state.page) {
			case "2": return <Projects />
			case "3": return <ThreeJS />
			case "4": return <Discord />
			case "5": return <Profile />
			default: return <Main />
		}
	}

	render() {
		return (
			<React.Fragment>
				<Navbar page={this.state.page} updatePage={this.switchPage}/>
				{this.determinePage()}
				<Footing/>
			</React.Fragment>
		)
	};
}

export default Home;
  