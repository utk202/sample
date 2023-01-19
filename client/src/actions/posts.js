import * as api from '../api';

// Action Creaters
// These are the functions that return actions
// Actions are the object having type and payloads(data)
// It is asynchronous action
export const getPosts=() => async(dispatch) =>{
    try {
        const{data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload:data});
    } catch (error) {
        console.log(error.message);
    }
};
export const createPost =(post) => async(dispatch) =>{
    try{
        const{data} =await api.createPost(post);
        dispatch({type : 'CREATE', payload:data});
    } catch(error){
        console.log(error);     // Here we don't use error.message as we lose information due to it
    }
};

export const updatePost = (id, post) => async(dispatch)=>{
    try{
        const {data} = await api.updatePost(id, post);
        dispatch({type : 'UPDATE', payload:data});
    }catch(error){
        console.log(error);   // Here we don't use error.message as we lose information due to it
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);    // Here we don't use error.message as we lose information due to it
    }
}