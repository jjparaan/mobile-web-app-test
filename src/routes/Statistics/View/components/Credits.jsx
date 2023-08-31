import React from 'react'
import { Link } from 'react-router-dom'
import JoinLeftIcon from '@mui/icons-material/JoinLeft';
import SavingsIcon from '@mui/icons-material/Savings';

const credits = [
    {
        icon: <JoinLeftIcon />,
        bank: 'City Bank',
        type: 'Credit Card',
        number: '000 0000 0001 546598',
        expiry: 'Expiry',
        expiryDate: '09/23',
        class: 'Card Holder',
        name: 'Stephen Strange',
        className: 'credit card1',
        expense: 'Expense',
        expenseValue: '1500.00',
        expenseValueStatus: 'up',
        expenseValueChange: '18.2',
        limit: 'Limit',
        limitValue: '13500.00',
        bgImg: '../../../../../public/bg-card-bright.jpg'
    },
    {
        icon: <SavingsIcon />,
        bank: 'City Bank',
        type: 'Credit Card',
        number: '000 2347 2903 849279',
        expiry: 'Expiry',
        expiryDate: '09/23',
        class: 'Card Holder',
        name: 'Peter Pan',
        className: 'credit card2',
        expense: 'Expense',
        expenseValue: '1500.00',
        expenseValueStatus: 'down',
        expenseValueChange: '4.2',
        limit: 'Limit',
        limitValue: '13500.00',
        bgImg: '../../../../../public/bg-card-bright2.jpg'
    },
    {
        icon: <JoinLeftIcon />,
        bank: 'City Bank',
        type: 'Credit Card',
        number: '000 0874 2266 294587',
        expiry: 'Expiry',
        expiryDate: '09/23',
        class: 'Card Holder',
        name: 'Jack Daniels',
        className: 'credit card3',
        expense: 'Expense',
        expenseValue: '1500.00',
        expenseValueStatus: 'up',
        expenseValueChange: '22.2',
        limit: 'Limit',
        limitValue: '13500.00',
        bgImg: '../../../../../public/bg-card-bright3.jpg'
    },
]

const Credits = () => {
    return (
        <section className='credits'>
            <div className="heading">
                <h3>My Credit Cards</h3>
                <Link to="/credits">Add new</Link>
            </div>
            <div className="creditContainer">
                {credits.map((credit, index) => (
                    <div className='cards' key={index}>
                        <div className={credit.className} style={{backgroundImage: `url(${credit.bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <div className="top">
                                <div className="left">
                                    {credit.icon}
                                </div>
                                <div className="right">
                                    <p className="bank">{credit.bank}</p>
                                    <p className="type">{credit.type}</p>
                                </div>
                            </div>
                            <div className="center">
                                <div className="left">
                                    <p>{credit.number}</p>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="left">
                                    <p className="expiry">{credit.expiry}</p>
                                    <p className="expiryDate">{credit.expiryDate}</p>
                                </div>
                                <div className="right">
                                    <p className="class">{credit.class}</p>
                                    <p className="name">{credit.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="creditTransaction">
                            <div className="left">
                                <p className="expense">{credit.expense}</p>
                                <p className="expenseValue">{credit.expenseValue} <span className={credit.expenseValueStatus}>{credit.expenseValueChange}</span></p>
                            </div>
                            <div className="right">
                                <p className="limit">{credit.limit}</p>
                                <p className="limitValue">{credit.limitValue}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Credits