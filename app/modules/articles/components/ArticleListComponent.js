import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class ArticleListComponent extends Component {
	render() {
		return (
			<View>
				<TouchableOpacity onPress={() => this.props.fetchArticles()}>
					<Text>hi react redux</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
