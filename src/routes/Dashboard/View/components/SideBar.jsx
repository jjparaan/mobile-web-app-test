import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useDispatch } from 'react-redux';
import { doToggleHamburgerBtn, doToggleClassValue } from '../../../../redux/features/hamburger/hamburgerSlice';

const user = [
    {
        img: '../../../../../../public/hero.jpg',
        name: 'John Doe',
        city: 'New Your City,',
        country: 'United States',
    },
]

const menuItems = [
    {
        icon: <HomeOutlinedIcon />,
        name: 'Dashboard',
    },
    {
        icon: <ShoppingCartOutlinedIcon />,
        name: 'Shop',
    },
    {
        icon: <ChatOutlinedIcon />,
        name: 'Messages',
    },
    {
        icon: <NotificationsOutlinedIcon />,
        name: 'Notifications',
    },
    {
        icon: <NewspaperOutlinedIcon />,
        name: 'Blogs',
    },
    {
        icon: <ColorLensOutlinedIcon />,
        name: 'Styles',
    },
    {
        icon: <AutoStoriesOutlinedIcon />,
        name: 'Pages',
    },
    {
        icon: <LogoutOutlinedIcon />,
        name: 'Logout',
    },
]

const SideBar = ({ classValue }) => {
    const dispatch = useDispatch();

    const [menuItemActiveStates, setMenuItemActiveStates] = useState(
        Array(menuItems.length).fill(false)
    );

    const handleMenuItemClick = (index) => {
        // Update the active state for the clicked menu item
        const updatedStates = menuItemActiveStates.map((state, i) => (index === i ? !state : false));
        setMenuItemActiveStates(updatedStates);
    
        // Dispatch the global classValue action (if needed)
        dispatch(doToggleClassValue());
    };

    return (
        <section className='sidebar'>
            <div className="shadow" onClick={() => dispatch(doToggleHamburgerBtn())}></div>
            <div className="content">
                {user.map((user, index) => (
                    <div className="user" key={index}>
                        <div className="left">
                            <img src={user.img} alt="user-img" />
                        </div>
                        <div className="right">
                            <div className="top">
                                <h2>
                                    {user.name}
                                </h2>
                            </div>
                            <div className="bottom">
                                <p>{user.city}</p>
                                <p>{user.country}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <ul>
                    {menuItems.map((menuItem, index) => (
                        <li
                            key={index}
                            className={menuItemActiveStates[index] ? 'item active' : 'item'}
                            onClick={() => handleMenuItemClick(index)}
                        >
                            <div className="left">
                                {menuItem.icon}
                                {menuItem.name}
                            </div>
                            <div className="right">
                                {menuItemActiveStates[index] ? (
                                    <KeyboardArrowRightOutlinedIcon />
                                ) : (
                                    <KeyboardArrowDownOutlinedIcon />
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default SideBar