import Image from "next/image";

const Portfolio = () => (
    <section id="portfolio">
        <h2>Portfolio</h2>
        <div>
        <Image src="/project1.jpg" alt="Project 1" width={300} height={200} />
        <Image src="/project2.jpg" alt="Project 2" width={300} height={200} />
        </div>
    </section>
);

export default Portfolio;
