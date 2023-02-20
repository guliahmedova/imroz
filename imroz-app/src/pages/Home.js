import Header from "../components/Header";
import HeaderCart from "../components/HeaderCart";
import SecondSection from "../components/SecondSection";
import HomeServices from "../components/HomeServices";
import headerCard from "../datas/headerCard";
import RecentWork from "../components/RecenWorks";
import CompanyGrowth from "../components/CompanyGrowth";
import LittleTeamImages from "../components/LittleTeamImages";
import Client from "../components/Client";

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
        </>
    )
}