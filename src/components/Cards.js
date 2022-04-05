export default function Card (props){
    return(
        <div className="allProjects">
            <div className="card">
                <div className="cardHeader">
                    <img className="cardImg" src={props.cardImage} alt="duck" />
                </div>
                <div className="cardBody">
                    <div className="cardName">
                        <p>{props.name}</p>
                    </div>
                    <div className="cardBtnDiv">
                        <a href={props.link} className="button cardBtn" target="_blank" rel="noreferrer">Show me the code!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
