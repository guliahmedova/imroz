export default function Card(props) {

    const styles = {
        color: props.icon_color
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
                <i style={styles} className={props.icon}></i>
                <h3>{props.card_title}</h3>
                <p>{props.card_text}</p>
            </div>
        </div>
    )
}