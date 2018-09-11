import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchArticles } from "../actions";
import ArticleListComponent from "../components/ArticleListComponent";

class ArticleListContainer extends Component {
	_fetchArticles = async () => {
		await this.props.fetchArticles();
	};
	render() {
		return <ArticleListComponent articles={this.props.articles} fetchArticles={this._fetchArticles} />;
	}
}

const mapStateToProps = store => {
	return {
		articles: store.articles.articles
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			fetchArticles
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer);
