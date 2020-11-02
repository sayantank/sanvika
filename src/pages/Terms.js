import React, { useEffect, useState } from 'react'
import Navbar2 from "../components/Navbar2"
import TermContent from '../components/TermsContent';
import SideBar from '../components/Sidebar';
import Footer from "../components/Footer";

const Terms = () => {
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
            <Navbar2 title="Terms and Conditions" scroll={scroll} toggle={toggle}/>
            <TermContent />
            <Footer />
        </>
    )
}

export default Terms