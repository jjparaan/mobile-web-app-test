import React from 'react'

const payments = [
  {
    img: '../../../../../../public/hero.jpg',
    paymentType: 'Send Money',
    name: 'John Winsels',
    paymentValue: '1500.00',
    paymentValueChange: '18.2',
    paymentValueChangeClassName: 'change up',
  },
  {
    img: '../../../../../public/bg-card-bright.jpg',
    paymentType: 'Transportation',
    name: 'ID0582Max',
    paymentValue: '320.00',
    paymentValueChange: '1.65',
    paymentValueChangeClassName: 'change down',
  },
]

const Payments = () => {
  return (
    <section className='payments'>
      <div className="heading">
        <h3>My Frequent Payments</h3>
      </div>
      <div className="paymentContainer">
        {payments.map((payment, index) => (
          <div className="payment" key={index}>
              <div className="imageContainer">
                <img src={payment.img} alt="payment image" />
              </div>
              <div className="details">
                <div className="top">
                  <p className="type">{payment.paymentType}</p>
                  <h3 className="name">{payment.name}</h3>
                </div>
                <p className="value">{payment.paymentValue}<span className={payment.paymentValueChangeClassName}>{payment.paymentValueChange}</span></p>
              </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Payments