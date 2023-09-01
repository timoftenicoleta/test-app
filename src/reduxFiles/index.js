import {user, posts} from './slices';
import {articles} from './blogSlice';
import favoriteReducer from './favorite';


const reducer = {
    user, 
    postsSlice: posts,
    articles,
    favoriteReducer
};

export default reducer;