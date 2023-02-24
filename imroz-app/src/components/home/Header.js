import { useState } from "react"
import Navbar from "./Navbar";

export default function Header() {
    return (
        <div className="main-header" >
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero">
                            <h1 className="big-text">Design Driven <br /> Development Your <br /> Web Products.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
