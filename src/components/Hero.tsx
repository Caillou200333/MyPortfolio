import {
    sectionCentered,
    container,
    smallText,
    title,
    subtitle,
    paragraph
} from "@/styles/styles";

export default function Hero() {
    return (
    <section className={`${sectionCentered} ${container} pt-28 pb-20`}>
        {/* Badge */}
        <p className={smallText}>
            Hello, I'm
        </p>

        {/* Nom */}
        <h1 className={title}>
            ROCHEREAU Pierre
        </h1>

        {/* Sous-titre */}
        <h2 className={subtitle}>
            Computer Science Engineering Student • Game Development • Systems Programming • Network Programming
        </h2>

        {/* Status */}
        <div className={paragraph} >
            Available for internships | France
        </div>

        {/* Description courte (important recruteur) */}
        <p className={paragraph}>
            Engineering student specializing in Computer Science with a strong interest in 
            game development, systems programming, and network programming. Experienced in 
            developing projects in modern C++, ranging from gameplay programming and multiplayer 
            systems to physics engines. Currently pursuing a dual degree in Computer Science with 
            a specialization in Game Development.
        </p>
    </section>
    );
}