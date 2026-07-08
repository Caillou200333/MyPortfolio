import { projects } from "@/data/projects";
import Image from "next/image";
import {
    section,
    container,
    sectionTitle,
    paragraph,
    list,
    card,
    cardTitle,
    cardSubtitle
} from "@/styles/styles";

export default function Projects() {
    return (
    <section id="projects" className={`${section} ${container}`}>
        
        <h2 className={sectionTitle}>Projects</h2>

        <div className={list}>
            {projects.map((p, i) => (
            <div key={i} className={`${card} grid md:grid-cols-2 gap-6 border-b pb-6`}>

                <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={200}
                    className="rounded-lg"
                />

                <div>
                    <h3 className={cardTitle}>{p.title}</h3>

                    <p className={cardSubtitle}>{p.duration} • {p.team}</p>
                    <p className={cardSubtitle}>{p.tech}</p>

                    <p className={paragraph}>{p.description}</p>

                    <p className={paragraph}>Rôle: {p.role}</p>

                    <div className="mt-4 flex gap-3">
                        <a href={p.github} className="px-3 py-1 border rounded">GitHub</a>
                        <a href={p.demo} className="px-3 py-1 border rounded">Demo</a>
                    </div>
                </div>
            </div>
            ))}
        </div>

    </section>
    );
}