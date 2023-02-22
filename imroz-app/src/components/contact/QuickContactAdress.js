import contactAdressesData from "../../datas/contact/contactAdressesData"
import QuickContactAdressCard from "./QuickContactAdressCard"
export default function QuickContactAdress() {
    const cards = contactAdressesData.map(item => {
        return (
          <QuickContactAdressCard key={item.id} {...item} />
        )
    })
    return (
        <section className="quick-contact-adress">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="colorful-title">
                            <h3>Our contact address</h3>
                        </div>
                        <div className="main-title">
                            <h1>Quick Contact Address</h1>
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