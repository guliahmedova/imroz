import FindWork from "../components/about/FindWork";
import SecondSection from "../components/home/SecondSection";
import CompanyGrowth from "../components/home/CompanyGrowth";
import Client from "../components/home/Client";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
export default function About() {
    return (
        <>
            <Header />
            <SecondSection/>
            <CompanyGrowth/>
            <FindWork />
            <Client/>
            <Footer/>
        </>
    )
}