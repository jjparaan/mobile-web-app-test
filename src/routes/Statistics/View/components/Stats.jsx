import React from 'react'
import SouthWestIcon from '@mui/icons-material/SouthWest';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const cards = [
    {
        icon: <SouthWestIcon style={{ borderRadius: '8px', border:'none', backgroundColor: '#00dfa3', fontSize: '34px', color:'white', padding: '4px'}}/>,
        name: 'Income',
        value: '1542k',
    },
    {
        icon: <NorthEastIcon style={{ borderRadius: '8px', border:'none', backgroundColor: '#f73563', fontSize: '34px', color:'white', padding: '4px'}}/>,
        name: 'Expense',
        value: '1212k',
    },
]

const Stats = () => {

    return (
        <section className='stats'>
            {cards.map((card) => (
                <div className='card' key={card.name}>
                    <div className="top">
                        <div className='left'>
                            {card.icon}
                        </div>
                        <div className="right">
                            <p className="name">{card.name}</p>
                            <p className="value">{card.value}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Stats