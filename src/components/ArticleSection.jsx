import { fetchArticles } from "../reduxFiles/blogSlice";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Article from "./Article";
import ImageCarousel from "./Carousel";

function ArticleSection() {
  const dispatch = useDispatch();
  const [nrArticles, setNrArticles] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [corouselImg, setCarouselImg] = useState();
  const articles = useSelector(state => state.articles);

  useEffect(() => {
    dispatch(fetchArticles(nrArticles))
  }, [dispatch, nrArticles]);

  // Function to filter articles based on the search query
  const filteredArticles = articles?.articleList.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="article-section">
      <input
        className="search-input"
        type="search"
        placeholder="Search by article title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="article-container">
        {
          filteredArticles.map((elem, index) => (
            <Article article={elem} key={index} handleImageClick={(img)=>{setIsOpen(true); setCarouselImg(img)}}/>
          ))
        }
      </div>
      {articles?.articleList.length > 1 &&
        articles?.articleList.length < 12 && (
          <button
            className="show-more"
            onClick={() => setNrArticles(nrArticles + 3)}
          >
            Show more articles
          </button>
        )}
        {isOpen && <ImageCarousel images={corouselImg} handleCloseButton={()=> setIsOpen(false)}/>}
    </section>
  );
}

export default ArticleSection;
