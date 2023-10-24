import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [changeHeader, setChangeHeader] = useState(false)

    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }

    //change header by scrolling
    window.addEventListener('scroll', onChangeHeader)
    return (
        <header className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
            <nav className="flex items-center max-w-screen-xl px-6 py-3 mx-auto">
                <div className="flex flex-grow text-center">
                    <h1 className='text-lg font-[500]'>Cloud Oven</h1>
                </div>
                <div className="flex items-center justify-end space-x-6 text-sm">
                    <NavHashLink smooth scrollOffset="400px" to="/#menu" activeStyle={{ color: 'red' }}>Our Menu</NavHashLink>
                    <NavHashLink smooth scrollOffset="400px" to="/#pricing" activeStyle={{ color: 'red' }}>Pricing</NavHashLink>
                    <NavHashLink smooth scrollOffset="400px" to="/#about" activeStyle={{ color: 'red' }}>About Us</NavHashLink>
                </div>

            </nav>
        </header>
    )
}

export default Navbar
