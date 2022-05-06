import * as service from '../services/posts-service';

export const GET_POSTS_BY_SLUG = 'GET_POSTS_BY_SLUG';
export const GET_POSTS_BY_USER_ID = 'GET_POSTS_BY_USER_ID';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const ADD_REPLY = 'ADD_REPLY';
export const DELETE_POST = 'DELETE_POST';

export const getPostsBySlug = async (dispatch, slug) => {
    const posts = await service.getPostsBySlug(slug);
    dispatch({
        type: GET_POSTS_BY_SLUG,
        posts
    });
}

export const getPostsByUserId = async (dispatch, userId) => {
    const posts = await service.getPostsByUserId(userId);
    dispatch({
        type: GET_POSTS_BY_USER_ID,
        posts
    })
}

export const createPost = async (dispatch, post) => {
    const newPost = await service.createPost(post);
    dispatch({
        type: CREATE_POST,
        newPost
    });
}

export const updatePost = async (dispatch, id, post) => {
    await service.updatePost(id, post);
    dispatch({
        type: UPDATE_POST,
        post
    });
}

export const addReply = async (dispatch, id, reply) => {
    await service.addReply(id, reply);
    dispatch({
        type: ADD_REPLY,
        id,
        reply
    })
}

/*export const deletePost = async (dispatch, tuit) => {
    await service.deleteTuit(tuit);
    dispatch({
        type: DELETE_TUIT,
        tuit
    })
}*/
