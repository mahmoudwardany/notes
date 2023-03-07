import { createSlice } from '@reduxjs/toolkit'
import {toast} from 'react-toastify'


export const postSlice=createSlice({
    name:"posts",
    initialState:{
        items:JSON.parse(localStorage.getItem('posts'))?JSON.parse(localStorage.getItem('posts')):[],
        postContainer:[]
    },
    reducers:{
        addPost:function(state,action){
            const posts = { ...action.payload };
            state.items.push(posts);
            toast.success(`${action.payload.title}  added Successfully'`, {
                position: "top-right",
            });
            localStorage.setItem("posts", JSON.stringify(state.items));

        },
        removePosts(state, action) {
            const rmv = state.items.filter(
                (item) => item.id !== action.payload.id);
            state.items = rmv;
            localStorage.setItem("posts", JSON.stringify(state.items));
            toast.error(`Removed ${action.payload.title} Successfully`, {
                position: "bottom-right",
            });
        },
        clear(state){
state.items=[]
toast.error(`All Posts Deleted`,{
    position:'bottom-left'
})
localStorage.setItem("posts",JSON.stringify(state.items))

        }

    },
 
})
export const {addPost,removePosts,clear}=postSlice.actions;
export default postSlice.reducer;