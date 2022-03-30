export default function Card (){
    return(
        <div className="card">
            <div className="cardHeader">
                <img className="cardImg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=980:*" alt="duck" />
            </div>
            <div className="cardBody">
                <div className="cardName">
                    <p>Project Name</p>
                </div>
                <div className="cardBtnDiv">
                    <button className="cardBtn">Show me the code!</button>
                </div>
            </div>
        </div>
    )
}
