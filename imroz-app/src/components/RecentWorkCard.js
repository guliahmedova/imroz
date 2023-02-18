export default function RecentWorkCard(props) {
    return (
        <div className="col-md-4" >
            <div className="our-team">
                <img src={`images/${props.imageUrl}`} alt="" />
                <div className="over-layer">
                    <div className="team-content">
                        <h3 className="title">{props.title}</h3>
                        <span className="post">{props.job}</span>
                        <p className="description">{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}