import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero';
import MenuTeaser from '../components/MenuTeaser';
import Navbar from "../components/Navbar"
import Service from '../components/Service';
import SideBar from '../components/Sidebar';

const Home = () => {
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
            <Navbar scroll={scroll} toggle={toggle} page="home"/>
            <Hero />
            <Service />
            <MenuTeaser />
        </>
    )
}

export default Home
