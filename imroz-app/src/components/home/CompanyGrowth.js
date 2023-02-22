import CompanyGrowthCard from "./CompanyGrowthCard"
import companyGrowthData from "../../datas/home/companyGrowthData";

export default function CompanyGrowth() {

    const companyGrowthCards = companyGrowthData.map((item) => {
        return(<CompanyGrowthCard key={item.id}  {...item} />)
    })

    return (
        <section className="company--growth">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="colorful-title">
                            <h3>Experts growts</h3>
                        </div>
                        <div className="main-title">
                            <h1>Our Company Growth</h1>
                        </div>
                        <div className="desc">
                            There are many variations of passages of Lorem Ipsum available,
                            <hr />
                            but the majority have suffered alteration.
                        </div>
                    </div>
                </div>
                <div className="row">{companyGrowthCards}</div>
            </div>
        </section>
    )
}