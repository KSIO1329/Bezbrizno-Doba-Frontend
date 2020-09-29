import axios from 'axios';

export const createPost = (post, auth) => {
    return (dispatch, getState) => {
        axios.post("/api/post.php",{
                ...post
            },{
                headers:{
                    Email: auth.email,
                    Password: auth.password
                }
        }).then(() =>{
            dispatch({ type: 'CREATE_POST', post});
        }).catch((err) =>{
            dispatch({ type: 'POST_ERROR', err});
        })
    }
}
export const deletePost = (id, auth) => {
    return (dispatch, getState) => {
        axios.post("/api/post.php",{}, { 
            headers:{
                Email: auth.email,
                Password: auth.password,
                Delete: true
            },
            params: {
                id: id
            }
        }).then(() =>{
            dispatch({ type: 'DELETE_POST', id});
        }).catch((err) =>{
            dispatch({ type: 'POST_ERROR', err});
        })
    }
}
export const getPost = (id) => {
    return (dispatch, getState) => {
        axios.get("/api/post.php?id=" + id)
        .then((res) =>{
            dispatch({ type: 'GET_POST', post: res.data})
        }).catch((err) =>{
            dispatch({ type: 'POST_ERROR', err});
        })
    }
}
export const getPostList = (pageSize, pageNumber) => {
    return (dispatch, getState) => {
        axios.get("/api/post_list.php?pageSize=" + pageSize + "&pageNumber=" + pageNumber)
        .then((res) =>{
            dispatch({ type: 'GET_POST_LIST', posts: res.data})
        }).catch((err) =>{
            dispatch({ type: 'POST_ERROR', err});
        })
    }
}
export const getPages = (pageSize) => {
    return (dispatch, getState) => {
        axios.get("/api/post_list_length.php")
        .then((res) =>{
            dispatch({ type: 'GET_POST_LIST_LENGTH', length: parseInt(Math.abs(res.data / pageSize) + 1)})
        }).catch((err) =>{
            dispatch({ type: 'POST_ERROR', err});
        })
    }
}