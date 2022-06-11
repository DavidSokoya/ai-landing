import React from 'react';
import { Article } from '../../components';
import './blog.css'; 
import { blog01, blog02, blog03, blog04, blog05 } from './import';



const Blog = () => {
  return (
    <div className="ai__blog section__margin">
      <div className="ai__blog-heading">
        <h1 className='gradient__text'>A lot is happening,We are blogging about it.</h1>
      </div>
      <div className="ai__blog-articles">
        <div className="ai__blog-articles_A">
          <Article 
            imageUrl={blog01} 
            date='15 Jun 2022' 
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
        </div>
        <div className="ai__blog-articles_B">
          <Article 
            imageUrl={blog02} 
            date='17 Jun 2022'
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
            />
          <Article 
            imageUrl={blog03} 
            date='19 Jun 2022'
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          <Article 
            imageUrl={blog04} 
            date='21 Jun 2022'
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          <Article 
            imageUrl={blog05} 
              date='26 Jun 2022'
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
        </div>
      </div>

    </div>
  )
}

export default Blog