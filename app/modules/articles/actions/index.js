import axios from "axios";

export const fetchArticles = () => {
	return async dispatch => {
		dispatch({ type: "FECTH_LIST_PENDING" });
		let response = await axios.get("https://api.coinmarketcap.com/v2/listings/");
		dispatch({ type: "FETCH_ARTILCES_RESOLVED", payload: response.data.data });
	};
};
