/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Root from "./app/routes";

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Root />
			</Provider>
		);
	}
}
