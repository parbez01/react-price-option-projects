/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {

    const [open,setOpen] = useState(false)

    const routes = [
        { path: '/', id: 'home', name: 'Home' },
        { path: '/about', id: 'about', name: 'About' },
        { path: '/contact', id: 'contact', name: 'Contact' },
        { path: '/products/:id', id: 'product-detail', name: 'Product Detail' },
        { path: '/404', id: 'not-found', name: 'Not Found' },
    ];

    return (
        
            <nav className="text-black bg-sky-300 p-6">
              <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
                
                  {
                      open === true ? 
                    <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                  }
                
             
              </div>
                <ul className={`md:flex duration-1000 absolute md:static bg-sky-300 px-6  ${open ? 'top-16' : '-top-60'}`}>
                    {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </nav>
        
    );
};

export default NavBar;