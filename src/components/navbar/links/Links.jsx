"use client";
import Link from "next/link";
import styles from './links.module.css';
import NavLink from "./navLink/NavLink";
import { useState } from 'react';
import Image from 'next/image';

const links = [

    {
        title: 'Homepage',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'Blog',
        path: '/blog'
    }
];

const Links = () => {
    const [open, setOpen] = useState(false);
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link, i) => (
                <NavLink key={i} item={link} />
            ))}
            {session ? (
                <>
                    {isAdmin && (
                        <NavLink item={{ title: 'Admin', path: '/admin' }} />
                    )}
                    <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <NavLink item={{ title: 'Login', path: '/login' }} />
            )}
        </div>
        <button className={styles.menuButton} onClick={()=>setOpen(prev=>!prev)}>
           <Image className={styles.image} src="/menus.png" width={20} height={20} />
            </button>
        {
            open && (
                <div className={styles.mobileLinks}>
                    {links.map((link, i) => (
                        <NavLink key={i} item={link} />
                    ))}
                 
                </div>
            )
        }
        </div>
    );
};

export default Links;
