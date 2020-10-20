import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import SideBar from '../components/Sidebar';

const Menu = () => {
    const [scroll, setScroll] = useState("top");
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if(window.scrollY < 60) {
                setScroll("top")
            } else {
                setScroll("bot")
            }
        })
    })

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar scroll={scroll} toggle={toggle} page="menu"/>
        </>
    )
}

export default Menu
