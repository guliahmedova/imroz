import { useState, useRef } from "react"
import { Link } from "react-router-dom"

// function getWindowDimensions() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//         width,
//         height
//     };
// }

function Header() {

    const [openHome, setOpenHome] = useState(false)
    const [menuBar, setmenuBar] = useState(false)

    // const [navSize, setnavSize] = useState("10rem");
    // const [navColor, setnavColor] = useState("transparent");
    // const listenScrollEvent = () => {
    //     window.scrollY > 10 ? setnavColor("black") : setnavColor("transparent");
    //     window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    // };
    // useEffect(() => {
    //     window.addEventListener("scroll", listenScrollEvent);
    //     return () => {
    //         window.removeEventListener("scroll", listenScrollEvent);
    //     };
    // }, []);

    // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    // useEffect(() => {
    //     function handleResize() {
    //         setWindowDimensions(getWindowDimensions());
    //         if (windowDimensions.width > 688) {
    //             setmenuBar(false)
    //         }
    //         else {
    //             setmenuBar(true)
    //         }
    //     }

    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);


    const menuRef = useRef()
    const menuBtnRef = useRef()

    window.addEventListener('click', (e) => {
        if (e.target !== menuBtnRef.current && e.target !== menuRef.current) {
            setOpenHome(false)
        }
    })

    return (
        <div className="container"  >
            <header className="header" >
                <div className="header--logo"><Link to="/"><img src="./images/logo.png" alt="" /></Link></div>
                <nav className={`${menuBar ? "active" : ""} nav--menu`}>
                    <div className="dropdown">
                        <button ref={menuBtnRef} onClick={() => setOpenHome(!openHome)} className="link">Home <i className="fa-solid fa-angle-down"></i></button>
                        {
                            openHome &&
                            <div ref={menuRef} onClick={() => setOpenHome(false)} className="dropdown-menu">
                                <Link to="/maindemo">Main Demo</Link>
                                <Link to="/maindemodark">Main Demo Dark</Link>
                                <Link to="/creativeportfolio">Creative Portfolio</Link>
                                <Link to="/startup">StartUp</Link>
                                <Link to="/digitalagency">Digital Agency</Link>
                                <Link to="/studioagency">Studio Agency</Link>
                                <Link to="/business">Business</Link>
                                <Link to="/interiorlanding">Interior Landing</Link>
                            </div>
                        }
                    </div>
                    <div className="nav--element"><Link to="/about">About</Link></div>
                    <div className="nav--element"><Link to="/service">Service</Link></div>
                    <div className="nav--element"><Link to="/contact">Contact</Link></div>
                </nav>

                <div onClick={() => setmenuBar(!menuBar)} className=" menu--bar">
                    {
                        menuBar ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>
                    }
                </div>
            </header>
        </div>
    )
}


export default Header