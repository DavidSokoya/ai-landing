import React from 'react';
import './article.css';
import blog1 from '../../assets/blog01.png'

const Article = ({imageUrl, date, title}) => {
  return (
    <div className="ai__article">
      <div className="ai__article-image">
        <img src={imageUrl} alt="blog" />
      </div>
      <div className="ai__article-content">
        <p>{date}</p>
        <h1>{title}</h1>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article