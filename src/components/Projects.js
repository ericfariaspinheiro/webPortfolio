import Card from "./Cards"

export default function Projects () {

    return(
        <div>
            <section id="projects">
                <h1>Here are some of my projects:</h1>
                <br />
                <div id="projectsGrid">
                    <div className="allProjects card1">
                        <Card />
                    </div>
                    <div className="allProjects card2">
                        <Card />
                    </div>
                    <div className="allProjects card3">
                        <Card />
                    </div>
                    <div className="allProjects card4">
                        <Card />
                    </div>
                    <div className="allProjects card5">
                        <Card />
                    </div>
                    <div className="allProjects card6">
                        <Card />
                    </div>
                </div>
            </section>
        </div>
    )
}