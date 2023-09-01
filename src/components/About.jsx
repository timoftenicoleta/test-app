import { useSelector, useDispatch} from "react-redux";
import { fetchPosts } from "../reduxFiles/slices";

function About () {
    const dispatch = useDispatch();
    const posts = useSelector(state=>state?.postsSlice);

    return(
        <>
            <button onClick={()=>dispatch(fetchPosts())}>Show posts</button>
            {posts.isLoading && <div>Loading ... </div>}
            {posts?.posts.length >0 && 
            <ul>
                {posts.posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
          }
        </>
    );
}

export default About;