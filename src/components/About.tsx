import Link from "next/link";

import {
    section,
    container,
    sectionTitle,
    paragraph,
    buttonGroup,
    buttonPrimary,
    buttonSecondary
} from "@/styles/styles";

export default function About() {
    return (
    <section id="about" className={`${section} ${container}`}>
        <h2 className={sectionTitle}>About Me</h2>

        {/* Description */}
        <p className={paragraph}>
            I am a Computer Science Engineering student currently in my third year, specializing 
            in software engineering and game development. I am currently enrolled in a dual degree 
            program in Computer Science (Game Development) at UQAC in Canada, alongside my engineering 
            studies at ENSEIRB-MATMECA in France. My academic background includes intensive mathematics 
            studies (MPSI/MP preparatory classes), which strengthened my problem-solving and algorithmic thinking.
        </p>

        <p className={paragraph}>
            I have a strong interest in systems programming, game engines, and real-time applications.
            I enjoy working close to the hardware and understanding how complex systems are built, from memory 
            management to performance optimization and architecture design.
            My experience includes C++ development, network programming, parallel programming, and 
            game development using Unreal Engine and Godot.
        </p>

        <p className={paragraph}>
            I enjoy building complex projects such as game engines, multiplayer systems, and gameplay prototypes.
            Through personal and academic projects, I have built multiplayer systems, a physics engine, gameplay 
            prototypes, and networked applications in C++.
            These projects helped me develop a strong understanding of software architecture, real-time constraints, 
            and collaborative development in team-based environments.
        </p>

        <p className={paragraph}>
            I am currently seeking an internship opportunity in software engineering or game development, 
            where I can apply and further develop my skills in C++, systems programming, and real-time software development.
        </p>

        {/* Boutons */}
        <div className={buttonGroup}>

            <Link
                href="#projects"
                className={buttonPrimary}
            >
                View my projects
            </Link>

            {/*
            <Link
                href="/cv.pdf"
                target="_blank"
                className={buttonSecondary}
            >
                Download my CV
            </Link>
            */}
        </div>
    </section>
    );
}