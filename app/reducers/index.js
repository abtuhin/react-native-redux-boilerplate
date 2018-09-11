import { combineReducers } from "redux";
import { articleReducer } from "../modules/articles/reducers";

const appReducers = combineReducers({
	articles: articleReducer
});

const reducers = (state, action) => {
	return appReducers(state, action);
};

export default reducers;
