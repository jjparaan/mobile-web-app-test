import React from 'react'
import SouthWestIcon from '@mui/icons-material/SouthWest';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const cards = [
  {
    icon: <SouthWestIcon style={{ borderRadius: '8px', border:'none', backgroundColor: '#98ED81', fontSize: '34px', color:'white', padding: '4px'}}/>,
    name: "Income",
    value: "1542k"
  },
  {
    icon: <NorthEastIcon style={{ borderRadius: '8px', border:'none', backgroundColor: '#D41D6D', fontSize: '34px', color:'white', padding: '4px'}}/>,
    name: "Expense",
    value: "1212k"
  },
]

const stack = cards.map((card, index) => (
  <div className='card' key={index}>
    <div className="left">
      {card.icon}
    </div>
    <div className="right">
      <p className='name'>{card.name}</p>
      <p className='value'>{card.value}</p>
    </div>
  </div>
))

const Stats = () => {
  return (
    <section className='stats'>
      <div className="balance">
        <h2>$ 1,050.00</h2>
        <p>Total Balance</p>
      </div>
      <div className="stack">
        {stack}
      </div>
    </section>
  )
}

export default Stats