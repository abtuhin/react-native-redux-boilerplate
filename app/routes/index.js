import { createStackNavigator } from "react-navigation";
import ArticleListContainer from "../modules/articles/containers/ArticleListContainer";
export default createStackNavigator({
	Home: ArticleListContainer
});
