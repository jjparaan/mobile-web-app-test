import React from 'react'
import { Link } from 'react-router-dom'

const news = [
  {
    img: '../../../../public/news.jpg',
    name: 'Do share and Earn a lot',
    description: 'Get $10 instant as reward while your friend or invited member join firm wall app.'
  },
  {
    img: '../../../../public/news.jpg',
    name: 'Do share and Earn a lot',
    description: 'Get $10 instant as reward while your friend or invited member join firm wall app.'
  },
  {
    img: '../../../../public/news.jpg',
    name: 'Do share and Earn a lot',
    description: 'Get $10 instant as reward while your friend or invited member join firm wall app.'
  },
]

const News = () => {
  const article = news.map((article, index) => (
    <div className="article" key={index}>
      <div className="img-container">
        <img src={article.img} alt="article-img" />
      </div>
      <div className="details">
        <p>{article.name}</p>
        <span>{article.description}</span>
      </div>
    </div>
  ))
  return (
    <section className='news'>
      <div className="heading">
        <h3>News and Upcoming</h3>
        <Link to="/news">Read More</Link>
      </div>
      <div className="stack">
        {article}
      </div>
    </section>
  )
}

export default News