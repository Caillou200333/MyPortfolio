import Link from "next/link";

export default function About() {
    return (
    <section id="about" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I am a Computer Science Engineering student currently in my third year,
            specializing in software engineering and game development. I am enrolled in a
            dual degree program in Computer Science (Game Development) at UQAC in Canada,
            alongside my studies at ENSEIRB-MATMECA in France.
        </p>

        {/* Description */}
        <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I have a strong interest in systems programming, game engines, and real-time applications.
            My academic background includes intensive mathematics studies (MPSI/MP preparatory classes),
            which strengthened my problem-solving and algorithmic thinking.
        </p>

        <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I enjoy building complex projects such as game engines, multiplayer systems, and gameplay prototypes.
            I am currently seeking an internship or work-study opportunity in software engineering or game development.
        </p>

        {/* Boutons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

        <Link
            href="#projects"
            className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition"
        >
            View my projects
        </Link>

        <Link
            href="/cv.pdf"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
        >
            Download my CV
        </Link>
        </div>

        {/* Status */}
        <div className="mt-10 text-sm text-zinc-500 dark:text-zinc-400">
            Available for internships | work-study — France
        </div>
    </section>
    );
}