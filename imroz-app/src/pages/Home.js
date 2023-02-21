import Header from "../components/Header";
import SecondSection from "../components/SecondSection";
import HomeServices from "../components/HomeServices";
import RecentWork from "../components/RecenWorks";
import CompanyGrowth from "../components/CompanyGrowth";
import LittleTeamImages from "../components/LittleTeamImages";
import Client from "../components/Client";
import Footer from "../components/Footer";

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