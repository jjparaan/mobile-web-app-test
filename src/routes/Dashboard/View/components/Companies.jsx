import React from 'react'
import { Link } from 'react-router-dom'
import ShowChartIcon from '@mui/icons-material/ShowChart';

const filters = [
  {
    icon: <ShowChartIcon />,
    name: 'All',
    className: 'filter active'
  },
  {
    icon: <ShowChartIcon />,
    name: 'Dummy',
    className: 'filter'
  },
  {
    icon: <ShowChartIcon />,
    name: 'Dummy',
    className: 'filter'
  },
  {
    icon: <ShowChartIcon />,
    name: 'Dummy',
    className: 'filter'
  },
]

const companies = [
  {
    img: '../../../../public/company-logo.jpg',
  },
  {
    img: '../../../../public/company-logo.jpg',
  },
  {
    img: '../../../../public/company-logo.jpg',
  },
  {
    img: '../../../../public/company-logo.jpg',
  },
  {
    img: '../../../../public/company-logo.jpg',
  },
]

const Companies = () => {
  const filter = filters.map((filter, index) => (
    <div className={filter.className} key={index}>
      {filter.icon}
      <p>{filter.name}</p>
    </div>
  ))

  const company = companies.map((company, index) => (
    <div className="company" key={index}>
      <img src={company.img} alt="company-img" />
    </div>
  ))
  
  return (
    <section className='companies'>
      <div className="heading">
        <h3>Companies</h3>
        <Link to="/bills">View More</Link>
      </div>
      <div className="filters">
        {filter}
      </div>
      <div className="stack">
        {company}
      </div>
    </section>
  )
}

export default Companies