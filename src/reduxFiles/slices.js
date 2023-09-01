import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    let data = [];
    try {
        const response = await fetch('https://dummyjson.com/posts');
        if(response.ok) {
            data = await response.json()
        } else {
            throw Error('error on fetching data')
        };
    } catch(error) {
        console.log(error);
    }

    return data?.posts || data;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {user: false},
    reducers: {
        setUser(state, action) {
            state.user = !state.user}
    }
});

const postsSlice = createSlice({
    name:'posts',
    initialState: {posts:[], error: null, isLoading:false},
    extraReducers: builder => {
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.posts=action.payload;
            state.isLoading = false;
        })
        .addCase(fetchPosts.rejected, (state)=>{
            state.error = true;
            state.isLoading = false;
        })
        .addCase(fetchPosts.pending, (state)=>{
            state.isLoading = true;
        })
    }
});

export const user = userSlice.reducer;
export const setUser = userSlice.actions.setUser;
export const posts = postsSlice.reducer;

