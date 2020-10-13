import React, { useEffect, useState } from 'react'

import Navbar from "../components/Navbar"

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
    return (
        <>
            <Navbar state={scroll}/>
            <h1>Home</h1>
        </>
    )
}

export default Home
