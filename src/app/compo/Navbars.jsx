import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Navbars = () => {
    return (
        <div>
             <Navbar>
      <NavbarBrand>
        
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/dashboard"  color="foreground" aria-current="page">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/coursedetail">
          Course Detail
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
       
      </NavbarContent>
    </Navbar>
        </div>
    );
};

export default Navbars;