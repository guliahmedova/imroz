export default function ContactUs() {
    return (
        <section className="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-card">
                            <h2>Let's Say Hi</h2>
                            <h1>Contact With Us.</h1>
                            <ul>
                                <li>
                                    Call us directly: <a href="#">+111 (0)55 5869 8976 </a>
                                </li>
                                <li>
                                    Contact Email: <a href="#">example@gmail.com</a>
                                </li>
                            </ul>
                            <form className="form" action="#">
                                <input type="text" placeholder="Your Name" />
                                <input type="tel" placeholder="Your Phone" />
                                <input type="email" placeholder="Your Email" />
                                <textarea type="email" placeholder="Your Message" />
                                <button className="submit-btn">SUBMIT NOW</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-image">
                            <img src="./images/contact/about-12.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}