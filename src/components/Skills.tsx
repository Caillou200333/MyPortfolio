export default function Skills() {
    return (
    <section id="skills" className="px-6 py-20 max-w-4xl mx-auto">
        
        <h2 className="text-2xl font-bold mb-6">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            
            <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p>React / Next.js / Tailwind / HTML / CSS</p>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <p>Node.js / API REST / Express</p>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Langages</h3>
                <p>JavaScript / TypeScript / Python / C</p>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Outils</h3>
                <p>Git / GitHub / Linux / VS Code</p>
            </div>

        </div>
    </section>
    );
}