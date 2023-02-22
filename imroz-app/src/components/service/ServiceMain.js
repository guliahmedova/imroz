import servicesData from "../../datas/home/servicesData";
import Card from "../home/Card";

export default function ServiceMain() {

    const cards = servicesData.map(item => {
        return (
            <Card key={item.id} {...item} />
        )
    })

    return (
        <section className="home--services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="colorful-title">
                            <h3>Our Marketing</h3>
                        </div>
                        <div className="main-title">
                            <h1>Digital Marketing</h1>
                        </div>
                        <div className="desc">
                            There are many variations of passages of Lorem Ipsum available,
                            <hr />
                            but the majority have suffered alteration.
                        </div>
                    </div>
                </div>
                <div className="row">{cards}</div>
            </div>
        </section>
    )
}