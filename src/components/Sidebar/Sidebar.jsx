import React from "react";
import Logo from "../../imgs/logo.png";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data"
import { UilSignOutAlt } from "@iconscout/react-unicons"
const Sidebar = () => {
    return ( <
        div className = "Sidebar" > { " " } { /*logo */ } <
        div className = "logo" >

        <
        img src = { Logo }
        alt = "" / >

        <
        span >
        Sh < span > o < /span>ps    <
        /span> { " " }  { / * menu * / }  <
        div className = "menu" > {
            SidebarData.map((Icon, index) => {
                return ( <
                    div className = "menuItems" >


                    <
                    span > { Icon.heading } <
                    /span>     <
                    /div>

                )
            })
        }

        <
        div className = "menuiItem" >
        <
        UilSignOutAlt / >
        <
        /div> 


        <
        /div>     <
        /div>  <
        /div>



    );
};

export default Sidebar;