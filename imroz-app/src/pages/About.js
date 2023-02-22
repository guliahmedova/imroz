import FindWork from "../components/about/FindWork";
import Navbar from "../components/home/Navbar";
import SecondSection from "../components/home/SecondSection";
import CompanyGrowth from "../components/home/CompanyGrowth";
import Client from "../components/home/Client";
import Footer from "../components/home/Footer";
export default function About() {
    return (
        <>
            <Navbar />
            <SecondSection/>
            <CompanyGrowth/>
            <FindWork />
            <Client/>
            <Footer/>
        </>
    )
}