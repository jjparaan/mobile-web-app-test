import React from 'react'
import { Link } from 'react-router-dom'

const transactions = [
  {
    img: '../../../../public/travel-logo.jpg',
    type: 'Travel',
    name: 'Uber',
    date: '15-10-2021 | 10:20am',
    value: '-25.00'
  },
  {
    img: '../../../../public/travel-logo.jpg',
    type: 'Travel',
    name: 'Uber',
    date: '15-10-2021 | 10:20am',
    value: '-25.00'
  },
  {
    img: '../../../../public/travel-logo.jpg',
    type: 'Travel',
    name: 'Uber',
    date: '15-10-2021 | 10:20am',
    value: '-25.00'
  },
  {
    img: '../../../../public/travel-logo.jpg',
    type: 'Travel',
    name: 'Uber',
    date: '15-10-2021 | 10:20am',
    value: '-25.00'
  },
]

const Transactions = () => {
  const transaction = transactions.map((transaction, index) => (
    <div className="transaction" key={index}>
      <div className="left">
        <div className="img-container">
          <img src={transaction.img} alt="logo-img" />
        </div>
        <div className="name">
          <span>{transaction.type}</span>
          <p>{transaction.name}</p>
        </div>
      </div>
      <div className="right">
        <span>{transaction.date}</span>
        <p>{transaction.value}</p>
      </div>
    </div>
  ))

  return (
    <section className='transactions'>
      <div className="heading">
        <div className="top">
          <h3>Transactions</h3>
        </div>
        <div className="bottom">
          <p>Today, 24 Aug 2021</p>
          <Link to="/transactions">View all</Link>
        </div>
      </div>
      <div className="stack">
        {transaction}
      </div>
    </section>
  )
}

export default Transactions