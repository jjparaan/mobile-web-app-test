import React, { useState } from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';

const items = [
  {
    icon: <CreditCardIcon
      style={{
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        fontSize: '34px',
        color: '#FFFFFF', 
        padding: '4px',
      }}
    />,
    name: "Pay",
  },
  {
    icon: <CreditCardIcon
      style={{
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', 
        fontSize: '34px',
        color: '#FFFFFF', 
        padding: '4px',
      }}
    />,
    name: "Send",
  },
  {
    icon: <CreditCardIcon
      style={{
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Added opacity to background
        fontSize: '34px',
        color: '#FFFFFF', // Changed color to white
        padding: '4px',
      }}
    />,
    name: "Receive",
  },
  {
    icon: <CreditCardIcon
      style={{
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Added opacity to background
        fontSize: '34px',
        color: '#FFFFFF', // Changed color to white
        padding: '4px',
      }}
    />,
    name: "Withdraw",
  },
  {
    icon: <CreditCardIcon
      style={{
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Added opacity to background
        fontSize: '34px',
        color: '#FFFFFF', // Changed color to white
        padding: '4px',
      }}
    />,
    name: "TV",
  },
  {
    icon: <CreditCardIcon
      style={{
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Added opacity to background
        fontSize: '34px',
        color: '#FFFFFF', // Changed color to white
        padding: '4px',
      }}
    />,
    name: "Add Money",
  },
  {
    icon: <CreditCardIcon
      style={{
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Added opacity to background
        fontSize: '34px',
        color: '#FFFFFF', // Changed color to white
        padding: '4px',
      }}
    />,
    name: "Buy",
  },
  {
    icon: <CreditCardIcon
      style={{
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Added opacity to background
        fontSize: '34px',
        color: '#FFFFFF', // Changed color to white
        padding: '4px',
      }}
    />,
    name: "Cashback",
  },
]

const Features = () => {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded((prevState) => !prevState)
  }

  const itemsToShow = expanded ? items : items.slice(0, 4)

  const stack = itemsToShow.map((item, index) => (
    <div className='item' key={index}>
      <div className="top">
        {item.icon}
      </div>
      <div className="bottom">
        <p className='name'>{item.name}</p>
      </div>
    </div>
  ))

  return (
    <section className='features'>
      {stack}
      <div className={expanded ? `openLine` : `closeLine`} onClick={handleToggle}></div>
    </section>
  )
}

export default Features