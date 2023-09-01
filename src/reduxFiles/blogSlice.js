import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import mockedArticles from '../mocked.json';

const getArticles = (nrArticles) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(mockedArticles?.articles.slice(0,nrArticles))},1000)
    });
};

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async (nrArticles)=>{
    let data = [];
    try {
        const response = await getArticles(nrArticles);
        if(response.length > 1) {
            data = response;
        } else {
            throw new Error('error on fetching data');
        }
    } catch(error) {
        console.log(error);
    }
    return data;
});

const blogSlice = createSlice({
    name:'articles',
    initialState: {articleList:[], error: null, isLoading:false},
    extraReducers: builder => {
        builder.addCase(fetchArticles.fulfilled,(state,action)=>{
            state.articleList=action.payload;
            state.isLoading = false;
        })
        .addCase(fetchArticles.rejected, (state)=>{
            state.error = true;
            state.isLoading = false;
        })
        .addCase(fetchArticles.pending, (state)=>{
            state.isLoading = true;
        })
    }
});

export const articles = blogSlice.reducer;
