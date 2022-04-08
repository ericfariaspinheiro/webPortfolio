export default function Card (props){
    return(
        <div className="allProjects">
            <div className="card">
                <div className="cardHeader">
                    <img className="cardImg" src={props.cardImage} alt={props.name} />
                </div>
                <div className="cardBody">
                    <div className="cardName">
                        <p>{props.name}</p>
                    </div>
                    <div className="cardBtnDiv">
                        <a href={props.linkLive} target="_blank">Live demo</a>
                        <div></div>
                        <a href={props.linkCode} className="button cardBtn" target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
