import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
    return (
    <section id="projects" className="px-6 py-20 max-w-5xl mx-auto">
        
        <h2 className="text-2xl font-bold mb-10">Projects</h2>

        <div className="space-y-10">
            {projects.map((p, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-6 border-b pb-6">

                <Image
                    src={p.image}
                    alt={p.title}
                    width={500}
                    height={300}
                    className="rounded-lg"
                />

                <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>

                    <p className="text-sm text-zinc-500">{p.tech}</p>
                    <p className="text-sm text-zinc-500">{p.duration} • {p.team}</p>

                    <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                    {p.description}
                    </p>

                    <p className="mt-2 text-sm">Rôle: {p.role}</p>

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