import React, { Component } from "react";
import { NavMenu } from "./NavMenu";
import Sidebar from "./Sidebar";

export class Layout extends Component {
	static displayName = Layout.name;

	render() {
		return (
			<div className="max-w-screen-xl mx-auto h-full flex">
				<NavMenu />
				{this.props.children}
				<Sidebar/>
			</div>
		);
	}
}
