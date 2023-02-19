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
    const headerCards = headerCard.map(item => {
        return (<HeaderCart key={item.id} {...item} />)
    })

    return (
        <>
            <div style={{ backgroundImage: "url(" + "./images/big_bg_image.jpg" + ")", }} className="main--home">
                <Header />

                <div className="container title--div">
                    <h3 className="title">Design Driven Development Your Web Products.</h3>
                </div>
                <div className="container main--cart">{headerCards}</div>
            </div>

            <SecondSection />
            <HomeServices />
            <RecentWork />
            <CompanyGrowth />
            <LittleTeamImages />
            <Client />
        </>
    )
}