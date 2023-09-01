import heart from '../assets/heartIcon.svg';
import {addFavorite} from '../reduxFiles/favorite';
import { useSelector, useDispatch} from "react-redux";

function Article ({article, handleImageClick}) {
    const dispatch  = useDispatch();
    return(
        <div className='single-article'>
            <button className='article-image' onClick={()=>handleImageClick(article.imgUrls)}>
                <img src={article.imgUrls[0]} alt={article.title}/>
            </button>
            <div className="article-title">{article.title}</div>
            <div className="article-description">{article.description}</div>
            <div className="article-footer">
                <div className='author-likes-comments'>
                    <span>{article.author}</span>
                    <span>{article.likes} likes</span>
                    <span>{article.comments} comments</span>
                </div>
                    <button className='favorite' onClick={()=>dispatch(addFavorite(article))}>
                        <img src={heart} alt="heart image"/>
                    </button>
            </div>
        </div>
    );
}

export default Article;