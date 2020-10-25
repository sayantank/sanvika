import React, { useEffect, useState } from 'react'
import Connect from '../components/Connect';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MenuTeaser from '../components/MenuTeaser';
import Navbar from "../components/Navbar"
import Service from '../components/Service';
import SideBar from '../components/Sidebar';

const Home = () => {
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
            <Navbar scroll={scroll} toggle={toggle} page="home"/>
            <Hero />
            <Service />
            <MenuTeaser />
            <Connect />
            <Footer />
        </>
    )
}

export default Home
