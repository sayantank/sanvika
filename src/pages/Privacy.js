import React, { useEffect, useState } from 'react'
import Navbar2 from "../components/Navbar2"
import SideBar from '../components/Sidebar';
import PrivacyContent from '../components/PrivacyContent';
import Footer from '../components/Footer';

const Privacy = () => {
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
            <Navbar2 title="Privacy Policy" scroll={scroll} toggle={toggle}/>
            <PrivacyContent />
            <Footer />
        </>
    )
}

export default Privacy