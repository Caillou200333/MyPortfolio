export default function Hero() {
    return (
    <section className="px-6 pt-28 pb-20 max-w-3xl mx-auto text-center bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-3xl text-center">

            {/* Badge */}
            <p className="text-sm mb-4 text-zinc-500 dark:text-zinc-400">
                Hello, I'm
            </p>

            {/* Nom */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
                ROCHEREAU Pierre
            </h1>

            {/* Sous-titre */}
            <h2 className="mt-4 text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300">
                Computer Science Engineering Student • Game Development • Software Engineering
            </h2>

            {/* Description courte (important recruteur) */}
            <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Engineering student specializing in computer science, with a strong focus on
                game development, systems programming, and software engineering. Currently pursuing
                a dual degree in Computer Science (Game Development specialization).
            </p>
        </div>
    </section>
    );
}