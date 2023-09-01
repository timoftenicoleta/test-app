import { useSelector, useDispatch} from "react-redux";
import Article from "./Article";

function Favorite () {
    const favoriteArticles = useSelector(state=>state.favoriteReducer.favorite)

    return(
        <div className="favorite-container">
           {favoriteArticles.length > 1 && favoriteArticles.map((elem, index)=> <Article article={elem} key={index}/>)}
        </div>
    );
}

export default Favorite;