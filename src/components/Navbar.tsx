"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { navbar, navlink } from "@/styles/styles";
import Image from "next/image";

export default function Navbar() {
    return (
    <header className={navbar}>
        {/* LEFT */}
        <div className="flex items-center gap-4">
            <Image
                src="/photo.jpg"
                alt="avatar"
                width={44}
                height={44}
                className="rounded-full"
            />

            <span className="font-semibold text-lg tracking-tight">
                ROCHEREAU Pierre
            </span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-base">
            <a href="#about" className={navlink}>About</a>
            <a href="#contact" className={navlink}>Contact</a>
            <a href="#projects" className={navlink}>Projects</a>
            <a href="#skills" className={navlink}>Skills</a>
            <a href="#experience" className={navlink}>Experience</a>

            <ThemeToggle />
        </div>
    </header>
    );
}