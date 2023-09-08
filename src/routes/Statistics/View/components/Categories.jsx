import React from 'react'
import RoofingOutlinedIcon from '@mui/icons-material/RoofingOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

const categories = [
    {
        icon: <RoofingOutlinedIcon />,
        value: '1.5k',
        valueChange: '18.2',
        name: 'Rent',
        valueChangeClassName: 'change up'
    },
    {
        icon: <SportsEsportsOutlinedIcon />,
        value: '2.48k',
        valueChange: '17.14',
        name: 'Gaming',
        valueChangeClassName: 'change up'
    },
    {
        icon: <CardGiftcardOutlinedIcon />,
        value: '250',
        valueChange: '5.45',
        name: 'Gifts',
        valueChangeClassName: 'change down'
    },
    {
        icon: <FilterVintageOutlinedIcon />,
        value: '1.5k',
        valueChange: '25.5',
        valueChangeClassName: 'change up',
        name: 'Gardening',
    },
    {
        icon: <WorkOutlineOutlinedIcon />,
        value: '25.8k',
        valueChange: '4.2',
        valueChangeClassName: 'change down',
        name: 'Shopping',
    },
    {
        icon: <RoofingOutlinedIcon />,
        value: '1.5k',
        valueChange: '18.2',
        name: 'Rent',
        valueChangeClassName: 'change up'
    },
    {
        icon: <SportsEsportsOutlinedIcon />,
        value: '2.48k',
        valueChange: '17.14',
        name: 'Gaming',
        valueChangeClassName: 'change up'
    },
    {
        icon: <CardGiftcardOutlinedIcon />,
        value: '250',
        valueChange: '5.45',
        name: 'Gifts',
        valueChangeClassName: 'change down'
    },
    {
        icon: <FilterVintageOutlinedIcon />,
        value: '1.5k',
        valueChange: '25.5',
        valueChangeClassName: 'change up',
        name: 'Gardening',
    },
    {
        icon: <WorkOutlineOutlinedIcon />,
        value: '25.8k',
        valueChange: '4.2',
        valueChangeClassName: 'change down',
        name: 'Shopping',
    },
]

const Categories = () => {
  return (
    <section className='categories'>
        <div className="heading">
            <h3>Top Categories</h3>
        </div>
        <div className="categoriesContainer">
            {categories.map((category, index) => (
                <div className="category" key={index}>
                    <div className="top">
                        <div className="icon">
                            {category.icon}
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="value">{category.value}<span className={category.valueChangeClassName}>{category.valueChange}</span></p>
                        <p className="name">{category.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Categories