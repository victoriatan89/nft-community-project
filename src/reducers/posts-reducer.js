import {GET_POSTS_BY_SLUG, GET_POSTS_BY_USER_ID, DELETE_POST, CREATE_POST, UPDATE_POST, ADD_REPLY} from "../actions/posts-action";

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_POSTS_BY_SLUG:
            return action.posts;
        case GET_POSTS_BY_USER_ID:
            return action.posts;
        case CREATE_POST:
            return [action.newPost, ...state];
        case UPDATE_POST:
            return state.map(post => post._id === action.post._id ? action.post : post);
        case ADD_REPLY:
            return state.map(post => post._id === action.id ? {...post, comments: [...post.comments, action.reply]} : post);
        /*case DELETE_POST:
            return state.filter(post => post._id !== action.post._id);*/
        default:
            return state;
    }
}

export default postsReducer;