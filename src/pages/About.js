import React, { useEffect, useState } from 'react'
import AboutContent from '../components/AboutContent';
import AboutHero from '../components/AboutHero';
import Navbar from "../components/Navbar"
import SideBar from '../components/Sidebar';
import Footer from '../components/Footer';

const About = () => {
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
    }, [])

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar scroll={scroll} toggle={toggle} page="about"/>
            <AboutHero />
            <AboutContent />
            <Footer />
        </>
    )
}

export default About
