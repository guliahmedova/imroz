import clients from "../datas/clients";

export default function Client(){
    const clientElements=clients.map(item=>{
        return(
            <li key={item.id}><img src={`${item.image}-${item.id}.png`} alt="" /></li>
        )
    })

    return(
        <section className="client">
              <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="colorful-title">
                            <h3>Top clients</h3>
                        </div>
                        <div className="main-title">
                            <h1>We worked with brands.</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="clients">
                        <ul>
                           {clientElements}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}