export default function QuickContactAdressCard(props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
                <i className={props.icon}></i>
                <h3>{props.title}</h3>
                <ul>
                    <li>{props.item_1}</li>
                    <li>{props.item_2}</li>
                </ul>
            </div>
        </div>
    )
}