const INITIAL_STATE = {
	articles: [],
	article: {}
};

export const articleReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "FETCH_ARTILCES_RESOLVED": {
			return {
				...state,
				articles: [...state.articles, ...action.payload]
			};
		}
		default:
			return state;
	}
};
