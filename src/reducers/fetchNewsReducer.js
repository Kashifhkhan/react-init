const fetchNews = (state= {}, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
    case "GET_NEWS": 
        return newState;
    case "NEWS_RECEIVED":
        newState.news = action.json;
        return newState;
    default:      
        return state
    }
}
export default fetchNews;