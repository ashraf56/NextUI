'use client'
import React, { useState } from 'react';
import logo from '@/asset/logo.jpg'
import logo2 from '@/asset/Logo2.png'
import { BsMicrosoftTeams } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { RiHome5Line } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';


const Sidebar = () => {
    let [open, Setopen] = useState(true)
    let menulist = [
        { id: 1, name: 'Home', icon: <RiHome5Line />, route: '/' },
        { id: 2, name: 'Task', icon: <FaTasks />, route: '/' },
        { id: 3, name: 'Analytics', icon: <SiGoogleanalytics />, route: '/' },
        { id: 4, name: 'Projects', icon: <GrProjects />, route: '/' },
        { id: 5, name: 'Setting', icon: <IoSettingsOutline />, route: '/', space: true },
        { id: 5, name: 'Team', icon: <BsMicrosoftTeams />, route: '/' }

    ]
    return (
        <div className={` h-screen   p-5 border-r-1 border-content1-foreground bg-[#131515] ${open ? 'w-60' : 'w-20 '} relative duration-250`}>



            {!open ?
                <div className='w-11'>
                    <Image src={logo} width={50} height={50} alt='logo1' className={`${open ? 'hidden' : ''} rounded-md `} onClick={() => Setopen(!open)} />
                </div>
                :
                <div className={`${open ? '' : 'hidden'} 'w-9' `}>
                    <Image src={logo2} width={150} height={150} alt='logo2' onClick={() => Setopen(!open)} />
                </div>
            }

            <ul className=' flex flex-col pt-20 '>

                {
                    menulist?.map(l => (
                        <li key={l?.id} className=' flex gap-2 text-base items-center hover:bg-primary-300 p-2 mt-2 rounded-md'>
                            <Link href={l?.route} className=' flex gap-2 items-center '>
                                <span className={`${' text-2xl text-left'}`}>
                                    {l?.icon}
                                </span>

                                <span className={`${!open && 'hidden'}`}> {l?.name}</span>
                            </Link>
                        </li>
                    ))
                }



            </ul>


        </div>
    );
};

export default Sidebar;
