import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator, TabNavigator, withNavigationFocus, DrawerNavigator } from "react-navigation";
import ArticleListContainer from "../modules/articles/containers/ArticleListContainer";
import FirstScreenContainer from "../modules/articles/containers/FirstScreenContainer";
import SecondScreenContainer from "../modules/articles/containers/SecondScreenContainer";
import ThirdScreenContainer from "../modules/articles/containers/ThirdScreenContainer";
import ThirdFirstScreenContainer from "../modules/articles/containers/ThirdFirstScreenContainer";
import ThirdSecondScreenContainer from "../modules/articles/containers/ThirdSecondScreenContainer";

const thirdNestedStacks = createStackNavigator(
	{
		third1: {
			screen: ThirdFirstScreenContainer
		},
		third2: {
			screen: ThirdSecondScreenContainer
		}
	},
	{
		headerMode: "none"
	}
);

class ThirdScreen1 extends Component {
	static navigationOptions = {
		tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
			jumpToIndex(2);
		},
		tabBarLabel: "Third 1"
	};

	render = () => {
		return <ThirdSecondScreenContainer navigation={this.props.navigation} />;
	};
}

const tabs = TabNavigator(
	{
		first: {
			screen: FirstScreenContainer
		},

		second: {
			screen: SecondScreenContainer
		},
		third: {
			screen: ThirdScreenContainer
		}
	},
	{
		tabBarPosition: "bottom",
		animationEnabled: true,
		lazy: true,
		swipeEnabled: true,
		initialRouteName: "",
		tabBarOptions: {
			inactiveTintColor: "#000",
			showIcon: true,
			showLabel: true,
			labelStyle: "#fff",
			tabStyle: {
				paddingTop: 5,
				paddingBottom: 5
			},
			style: { backgroundColor: "#a2a2a2", elevation: 2 },
			indicatorStyle: { backgroundColor: "#fff" }
		}
	}
);

const HomeTabs = createStackNavigator(
	{
		tabscreen: {
			screen: tabs
		}
	},
	{
		headerMode: "none"
	}
);

export default createStackNavigator(
	{
		Home: {
			screen: HomeTabs
		},
		baal: { screen: ThirdScreenContainer }
	},
	{
		headerMode: "none"
	}
);
