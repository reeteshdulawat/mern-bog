import React from 'react';
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { LuSunMedium } from "react-icons/lu";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { CiSearch } from "react-icons/ci";
import { GoMoon } from "react-icons/go";

export default function Header() {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user);
    const { theme } = useSelector((state) => state.theme);
    const handleSignout = async () => {
        try {
            const res = await fetch('/api/user/signout', {
                method: 'POST',
            });
            const data = await res.json();
            if (!res.ok) {
                console.log(data.message);
            } else {
               dispatch(signoutSuccess());
            }
        } catch (error) {
            console.log(error.message);
        }
    };
  return (
    <Navbar className='navbar'>
        <div className="flex flex-wrap gap-2">
        <Navbar.Toggle />
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span>Mern Blog</span>
        </Link></div>
        <form>
            <TextInput 
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='searchbar hidden lg:inline'
            />
        </form>
        <div className='flex flex-wrap gap-2 md:order-2'>
            <Button size="xs" className='bg-[#f8fafc]' color='gray' pill onClick={()=>dispatch(toggleTheme())}>
                {theme === 'light' ? <GoMoon className='self-center h-6 w-6' /> : <LuSunMedium className='self-center h-6 w-6' />}
            </Button>
            <Button size="xs" className='lg:hidden bg-[#f8fafc]' color='gray' pill>
        <CiSearch className='self-center h-6 w-6' />
        </Button>
            {currentUser ? (
                <Dropdown 
                arrowIcon={false}
                inline
                label={
                    <Avatar
                    alt='user'
                    img={currentUser.profilePicture}
                    rounded
                    />
                }
                >
                <Dropdown.Header>
                    <span className='block text-sm'>@{currentUser.username}</span>
                    <span className='block text-sm font-medium truncate'>@{currentUser.email}</span>
                </Dropdown.Header>
                <Link to={'/dashboard?tab=profile'}>
                    <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
                </Dropdown>
            ):
           (
               <Link to='/sign-in'>
               <Button className='bg-[#1e293b]'>Sign In</Button>
               </Link>
           ) 
           }
        </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/'>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/projects"} as={'div'}>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/projects"} as={'div'}>
                    <Link to='/projects'>
                        Unknown
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  )
}
