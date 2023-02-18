export default function Card(props) {

    const styles = {
        color: props.icon_color
    }

    return (
        <div className="column">
            <div className="card">
                <i style={styles} className={props.icon}></i>
                <h3>{props.card_title}</h3>
                <p>{props.card_text}</p>
            </div>
        </div>
    )
}