import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import SideBar from '../components/Sidebar';

const Franchise = () => {
    useEffect(() => {
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
    }, []);

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
            <Navbar scroll={scroll} toggle={toggle} page="franchise"/>
        </>
    )
}

export default Franchise
