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
            
            {/* Languages */}
            <div className={card}>
                <h3 className={cardTitle}>Languages</h3>
                <p className={cardText}>
                    French (Native) • English (C1 TOEIC) • Spanish (Conversational)
                </p>
            </div>
            
            {/* Programming Languages */}
            <div className={card}>
                <h3 className={cardTitle}>Programming Languages</h3>
                <p className={cardText}>
                    C++ • C • Rust • Java • Python • JavaScript • PHP
                </p>
            </div>

            {/* Game Development */}
            <div className={card}>
                <h3 className={cardTitle}>Game Development</h3>
                <p className={cardText}>
                    Unreal Engine • Godot Engine • Bevy • Object-Oriented Programming (OOP) • Entity Component System (ECS)
                </p>
            </div>

            {/* Development Tools */}
            <div className={card}>
                <h3 className={cardTitle}>Development Tools</h3>
                <p className={cardText}>
                    Git • Perforce • CMake • LaTeX • Linux
                </p>
            </div>

            {/* Parallel Computing */}
            <div className={card}>
                <h3 className={cardTitle}>Systems & Parallel Computing</h3>
                <p className={cardText}>
                    C++ • Systems Programming • OpenMP • CUDA • Multithreading
                </p>
            </div>

            {/* Web */}
            <div className={card}>
                <h3 className={cardTitle}>Web Development</h3>
                <p className={cardText}>
                    HTML • CSS • JavaScript • Next.js • React • Tailwind CSS
                </p>
            </div>

            {/* Databases */}
            <div className={card}>
                <h3 className={cardTitle}>Databases</h3>
                <p className={cardText}>
                    PostgreSQL • MySQL
                </p>
            </div>
        </div>
    </section>
    );
}