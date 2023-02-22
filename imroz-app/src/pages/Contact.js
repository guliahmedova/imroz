import Navbar from "../components/home/Navbar";
import Header from "../components/home/Header";
import QuickContactAdress from "../components/contact/QuickContactAdress";
import ContactUs from "../components/contact/ContactUs";
import Map from "../components/contact/Map";
import Client from "../components/home/Client";
import Footer from "../components/home/Footer";

export default function Contact() {
    return (
        <>
            <Header />
            <QuickContactAdress />
            <ContactUs />
            <Map />
            <Client />
            <Footer />
        </>
    )
}