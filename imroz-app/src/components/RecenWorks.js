import RecentWorkCard from "./RecentWorkCard";
import recentWorkData from "../datas/recentWorksData";

export default function RecentWork(){

    const recenWorkCards = recentWorkData.map((item)=>{
        return (<RecentWorkCard key={item.id} {...item} />)
    })

    return(
        <section className="resent-works">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="colorful-title">
                        <h3>Our project</h3>
                    </div>
                    <div className="main-title">
                        <h1>Some of our Recent Works</h1>
                    </div>
                    <div className="desc">
                        There are many variations of passages of Lorem Ipsum available,
                        <hr />
                        but the majority have suffered alteration.
                    </div>
                </div>
            </div>
            <div className="row">{recenWorkCards}</div>
        </div>
    </section>
    )
}