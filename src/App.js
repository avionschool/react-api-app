import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search';
import ArticleContainer from './components/ArticleContainer';
import Articles from './components/Articles';
import { getArticles } from './utils/getArticles';

function App() {
  const access_key = `${process.env.REACT_APP_NEWS_API_KEY}`
  const query = `Manila`
  
  const [articles, setArticles] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [URL, setURL] = useState(`https://newsapi.org/v2/everything?q=${query}&apiKey=${access_key}`)
  const [isLoading, setLoadingStatus] = useState(true)
  const [error, setError] = useState('error')
  
  const handleSubmit = e => {
    e.preventDefault();
    setURL(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${access_key}`);
    setLoadingStatus(true);
  }

  useEffect(async () => {
    const response = await getArticles(`${URL}`)
    if (response.status === 'ok') {
      setArticles(response.articles);
      setLoadingStatus(false);
    } else {
      setError(error);
    }
  }, [URL]);

  return (
    <div className="App">
      <Search formTitle='Search' 
      inputTitle='SearchInput'
      searchInput={searchInput}
      setSearchInput={e => setSearchInput(e.target.value)}
      handleSubmit={handleSubmit}/>
      <ArticleContainer title="ArticleContainer">
        {articles.map((article, index) => {
          return (
            <Articles key={index}
            title='Articles'
            link={article.url}
            source={article.source.name}
            body={article.description}
            date={article.publishedAt}/>)
        })}
      </ArticleContainer>      
    </div>
  );
}

export default App;
