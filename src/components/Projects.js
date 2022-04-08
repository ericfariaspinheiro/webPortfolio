import Card from "./Cards"

const cardContent = [
    {
        cardImage: "https://s2.glbimg.com/zGVG4t2AWUmNaxgO6qNAXwFdN8U=/smart/e.glbimg.com/og/ed/f/original/2022/01/31/wordle.jpg",
        name: "Wordle",
        linkLive: "https://ericfariaspinheiro.github.io/wordle-eric/",
        linkCode: "https://github.com/ericfariaspinheiro/wordle-eric"
    },
    
    {
        cardImage: "https://files.tecnoblog.net/wp-content/uploads/2020/03/pomodoro-timer.jpg",
        name: "25 + 5 Clock",
        linkLive: "https://ericfariaspinheiro.github.io/25plus5Timer/",
        linkCode: "https://github.com/ericfariaspinheiro/25plus5Timer"
    },
    {
        cardImage: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Casio_calculator_JS-20WK_in_201901_002.jpg",
        name: "Calculator",
        linkLive: "https://ericfariaspinheiro.github.io/Calculator-With-React/",
        linkCode: "https://github.com/ericfariaspinheiro/Calculator-With-React"
    }
]

export default function Projects () {

    const everyProject = cardContent.map((item, index)=> {
        return (
            <Card
                key={index}
                cardImage={item["cardImage"]}
                name = {item["name"]}
                linkLive = {item["linkLive"]}
                linkCode = {item["linkCode"]}
            />
        )
    });


    return(
        <div>
            <section id="projects">
                <h1>PROJECTS</h1>
                <br />
                <div className="projectsContainer">
                    {everyProject}
                </div>
            </section>
        </div>
    )
}