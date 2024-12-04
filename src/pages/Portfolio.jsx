import Project from "../components/Project"

const data = [
    {
        title: "Test Project 01",
        link: "https://www.google.com/",
        img: "https://placehold.co/300x200/EEE/31343C"
    },
    {
        title: "Test Project 02",
        link: "https://github.com/",
        img: "https://placehold.co/300x200/EEE/31343C"
    },
    {
        title: "The Ultimate Weather App",
        link: "https://weather.com/",
        img: "https://placehold.co/300x200/EEE/31343C"
    },
]

export default function Portfolio() {
    return (
        <div id="portfolio-gallery">
            {data.map((item,index) =>(
                <Project
                    key={index}
                    title={item.title}
                    link={item.link}
                    img={item.img}
                    />
            ))}
        </div>
    )
}