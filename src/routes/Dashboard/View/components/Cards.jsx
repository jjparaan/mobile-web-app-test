import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const cards = [
  {
    progress: 65,
    name: 'Dream Car',
    value: '15402k',
    type: 'Savings',
    color: 'primary',
  },
  {
    progress: 82,
    percentage: '82%',
    name: 'Dream House',
    value: '55402k',
    type: 'Savings',
    color: 'secondary',
  },
]

const Cards = () => {
  const card = cards.map((card, index) => (
    <div className="card" key={index}>
      <div className="top">
        <CircularProgress variant="determinate" value={card.progress} size={80} color={card.color}/>
        <Typography variant='h3' className="value">{card.progress}%</Typography>
      </div>
      <div className="bottom">
        <p className='name'>{card.name}</p>
        <p className='value'>{card.value} <span>{card.type}</span></p>
      </div>
    </div>
  ))
  
  return (
    <section className='cards'>
      <h3>My Goals and Targets</h3>
      {card}
    </section>
  )
}

export default Cards