import footerContactData from "../../datas/home/footerContactData";
import footerQuickLinkData from "../../datas/home/footerQuickLinkData";
import sosialMediasData from "../../datas/home/sosialMediasData";
import ScrollButton from "./ScrollButton";
import { Link } from "react-router-dom";

export default function Footer() {
    const contacts = footerContactData.map((item) => {
        return (
            <li key={item.id}><span>{item.title}</span>: {item.text}</li>
        )
    })
    const links = footerQuickLinkData.map((item) => {
        return (
            <li key={item.id}><Link to={item.link}>{item.title}</Link></li>
        )
    })

    const sosialMedias = sosialMediasData.map((item) => {
        return (
            <li key={item.id}><i className={item.icon}></i></li>
        )
    })
    return (
        <footer className="footer">
            <section className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <h1>Enough Talk, Let's Build <br />
                                Something Together</h1>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="btn">
                                <a href="#">read out now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <img src="./images/home/logo-footer.png" alt="" />
                                <p>
                                    Copyright © 2022 Imroz Joomla 4 Template. <br />
                                    Built with love by PayoThemes All rights <br />
                                    reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="link">
                                <h2>Quick Link</h2>
                                <ul>
                                    {links}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="link">
                                <h2>Company</h2>
                                <ul>
                                    {links}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="contact">
                                <h2>Say Hello</h2>
                                <ul>
                                    {contacts}
                                </ul>
                                <ul className="sosial-medias">
                                    {sosialMedias}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ScrollButton/>
        </footer>
    )
}

//bottom-to-top button