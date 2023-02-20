import { useState } from "react"
import Navbar from "./Navbar";

export default function Header() {
    return (
        <div className="main-header" >
            <img className="bg-image" src="./images/big_bg_image.jpg" alt="" />
            <Navbar />
        </div>
    )
}
