import React from 'react'
import { Link } from 'react-router-dom'

const people = [
  {
    img: '../../../../public/hero.jpg'
  },
  {
    img: '../../../../public/hero.jpg'
  },
  {
    img: '../../../../public/hero.jpg'
  },
  {
    img: '../../../../public/hero.jpg'
  },
  {
    img: '../../../../public/hero.jpg'
  },
]

const People = () => {
  const person = people.map((person, index) => (
    <div className="person" key={index}>
      <img src={person.img} alt="hero-img" />
    </div>
  ))

  return (
    <section className='people'>
      <div className="heading">
        <h3>People</h3>
        <Link to="/people">View More</Link>
      </div>
      <div className="stack">
        {person}
      </div>
    </section>
  )
}

export default People