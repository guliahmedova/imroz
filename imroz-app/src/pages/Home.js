import Header from "../components/home/Header";
import SecondSection from "../components/home/SecondSection";
import HomeServices from "../components/home/HomeServices";
import RecentWork from "../components/home/RecenWorks";
import CompanyGrowth from "../components/home/CompanyGrowth";
import LittleTeamImages from "../components/home/LittleTeamImages";
import Client from "../components/home/Client";
import Footer from "../components/home/Footer";

export default function Home() {
    return (
        <>
            <Header/>
            <SecondSection />
            <HomeServices />
            <RecentWork />
            <CompanyGrowth />
            <LittleTeamImages />
            <Client />
            <Footer/>
        </>
    )
}