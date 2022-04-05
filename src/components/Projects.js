import Card from "./Cards"

const cardContent = [
    {
        cardImage: "https://s2.glbimg.com/zGVG4t2AWUmNaxgO6qNAXwFdN8U=/smart/e.glbimg.com/og/ed/f/original/2022/01/31/wordle.jpg",
        name: "Wordle",
        link: "https://github.com/ericfariaspinheiro/wordle-eric"
    },
    {
        cardImage: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Casio_calculator_JS-20WK_in_201901_002.jpg",
        name: "Calculator",
        link: "https://github.com/ericfariaspinheiro/Calculator-With-React"
    }
]

export default function Projects () {

    const everyProject = cardContent.map((item)=> {
        return (
            <Card
                cardImage={item["cardImage"]}
                name = {item["name"]}
                link = {item["link"]}
            />
        )
    });


    return(
        <div>
            <section id="projects">
                <h1>Here are some of my projects:</h1>
                <br />
                <div className="projectsContainer">
                    {everyProject}
                </div>
            </section>
        </div>
    )
}