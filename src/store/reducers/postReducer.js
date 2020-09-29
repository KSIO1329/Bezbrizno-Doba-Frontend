const initState = {
    posts: [],
    post: [],
    length: 1
}

const postReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_POST':
            var cleanArray = state.posts.slice(0,state.posts.length-1);
            cleanArray.unshift(action.post);
            return {
                ...state,
                posts: cleanArray
            };
        case 'GET_POST_LIST':
            return {
                ...state,
                posts: action.posts};
        case 'GET_POST':
            return {
                ...state,
                post: action.post};
        case 'DELETE_POST':
            cleanArray = state.posts.filter(post => post.id !== action.id)
            return {
                ...state,
                posts: cleanArray};
        case 'GET_POST_LIST_LENGTH':
            return {
                ...state,
                length: action.length};
        case 'POST_ERROR':
            console.log('error', action.err);
            return state;
        
        default:
            return state;
    }
}

export default postReducer;