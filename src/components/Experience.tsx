import {
    section,
    container,
    sectionTitle,
    list,
    card,
    cardText,
    cardTitle,
    cardSubtitle
} from "@/styles/styles";

export default function Experience() {
    return (
    <section id="experience" className={`${section} ${container}`}>

        <h2 className={sectionTitle}>Expérience</h2>

        <div className={list}>

            <div className={card}>
                <h3 className={cardTitle}>Dual Degree — M.Sc. in Computer Science (Game Development)</h3>
                <h3 className={cardSubtitle}>Université du Québec à Chicoutimi (UQAC), Canada • 2025 – 2026</h3>

                <p className={cardText}>
                    Currently pursuing a dual degree with a specialization in Game Development.
                    Coursework focuses on advanced game programming, multiplayer and network
                    programming, real-time systems, and modern software engineering practices.
                </p>
            </div>
            
            <div className={card}>
                <h3 className={cardTitle}>Computer Science Engineering Degree</h3>
                <h3 className={cardSubtitle}>ENSEIRB-MATMECA, Bordeaux, France • 2023 – 2026</h3>

                <p className={cardText}>
                    Engineering curriculum covering software engineering, systems programming,
                    algorithms, databases, operating systems, computer networks, parallel
                    computing, and large-scale software development. Numerous team projects
                    using modern C++ and game development technologies.
                </p>
            </div>

            <div className={card}>
                <h3 className={cardTitle}>Preparatory Classes (MPSI → MP, Computer Science Option)</h3>
                <h3 className={cardSubtitle}>Lycée Montaigne, Bordeaux, France • 2021 – 2023</h3>

                <p className={cardText}>
                    Intensive two-year program focused on advanced mathematics, physics, and
                    computer science. Developed strong analytical thinking, problem-solving
                    abilities, and rigorous programming fundamentals.
                </p>
            </div>

            <div className={card}>
                <h3 className={cardTitle}>French Baccalaureate (High Honors)</h3>
                <h3 className={cardSubtitle}>Lycée de la Mer, France • 2018 – 2021</h3>

                <p className={cardText}>
                    Graduated with Highest Honors. Specialized in Mathematics and Physics,
                    with Advanced Mathematics and the European English Section.
                </p>
            </div>
        </div>
    </section>
    );
}