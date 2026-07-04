"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function Navbar() {
    return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-5 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/60 backdrop-blur-md">
        
        {/* LEFT */}
        <div className="flex items-center gap-4">
            <Image
                src="/photo.png"
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

            <a
                href="#about"
                className="hover:text-zinc-500 transition font-medium"
            >
                About
            </a>

            <a
                href="#contact"
                className="hover:text-zinc-500 transition font-medium"
            >
                Contact
            </a>

            <a
                href="#projects"
                className="hover:text-zinc-500 transition font-medium"
            >
                Projects
            </a>

            <a
                href="#skills"
                className="hover:text-zinc-500 transition font-medium"
            >
                Skills
            </a>

            <a
                href="#experience"
                className="hover:text-zinc-500 transition font-medium"
            >
                Experience
            </a>

            <ThemeToggle />
        </div>
    </header>
    );
}

/**
    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
        {/* Left }
        <div className="flex items-center gap-3">
            <Image
                src="/photo.png"
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full"
            />
            <span className="font-semibold">ROCHEREAU Pierre</span>
        </div>

        {/* Right }
        <div className="flex items-center gap-4 text-sm">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>

            <ThemeToggle />
        </div>
    </header> */