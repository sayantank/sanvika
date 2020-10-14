import React from 'react'

import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink} from "./SidebarElements";

const SideBar = (props) => {
    return (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/" onClick={props.toggle}>Home</SidebarLink>
                <SidebarLink to="/about" onClick={props.toggle}>About</SidebarLink>
                <SidebarLink to="/menu" onClick={props.toggle}>Menu</SidebarLink>
                <SidebarLink to="/franchise" onClick={props.toggle}>Franchise</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default SideBar
