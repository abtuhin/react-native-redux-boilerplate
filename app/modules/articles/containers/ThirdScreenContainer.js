import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class ThirdScreenContainer extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					onPress={() => {
						this.props.navigation.navigate("baal");
					}}
				>
					<Text>Third Screen</Text>
				</TouchableOpacity>
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
