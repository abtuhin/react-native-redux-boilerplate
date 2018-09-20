import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ThirdSecondScreenContainer extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Third Screen</Text>
				<Text>Third nested 2 Screen</Text>
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
