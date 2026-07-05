import {
    section,
    container,
    sectionTitle,
    grid,
    card,
    cardTitle,
    cardText
} from "@/styles/styles";

export default function Skills() {
    return (
    <section id="skills" className={`${section} ${container}`}>
        
        <h2 className={sectionTitle}>Skills</h2>

        <div className={grid}>
            
            {/* Frontend */}
            <div className={card}>
                <h3 className={cardTitle}>Frontend</h3>
                <p className={cardText}>
                    React / Next.js / Tailwind / HTML / CSS
                </p>
            </div>

            {/* Backend */}
            <div className={card}>
                <h3 className={cardTitle}>Backend</h3>
                <p className={cardText}>
                    Node.js / API REST / Express
                </p>
            </div>

            {/* Languages */}
            <div className={card}>
                <h3 className={cardTitle}>Languages</h3>
                <p className={cardText}>
                    JavaScript / TypeScript / Python / C / C++
                </p>
            </div>

            {/* Tools */}
            <div className={card}>
                <h3 className={cardTitle}>Tools</h3>
                <p className={cardText}>
                    Git / GitHub / Linux / VS Code
                </p>
            </div>
        </div>
    </section>
    );
}