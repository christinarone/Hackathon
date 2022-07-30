import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
import News from './components/News';

const App = (props) => {

  const [filteredNews, setNews] = useState([])

  useEffect(() => {
    // add searchParam to query=
    axios.get("http://hn.algolia.com/api/v1/search?query=")
    .then((res) => {
      setNews(res.data.hits)
    })
  }, [])

  return (
    <div className="App">
      <div>
        {filteredNews.map((news, index) => (
          <News key={index} title={news.title} created_at={news.created_at} author={news.author} url={news.url} points={news.points} 
          comments={news.num_comments}/>
        ))}
      </div>
    </div>
  );
}

export default App;
