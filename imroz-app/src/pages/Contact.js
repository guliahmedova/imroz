import Navbar from "../components/home/Navbar";
import Header from "../components/home/Header";
import QuickContactAdress from "../components/contact/QuickContactAdress";
import ContactUs from "../components/contact/ContactUs";
import Map from "../components/contact/Map";

export default function Contact(){
    return(
        <div>
            <Header/>
            <QuickContactAdress/>
            <ContactUs/>
            <Map/>
        </div>
    )
}