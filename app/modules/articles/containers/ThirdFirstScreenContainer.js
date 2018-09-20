import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ThirdFirstScreenContainer extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Third Screen</Text>
				<Text>Third nested 1 Screen More jaa</Text>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
};
