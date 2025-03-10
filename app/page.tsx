import Image from "next/image"
import Link from "next/link"

import { FaGithub, FaTwitter, FaDiscord, FaExternalLinkAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Badge from "@/components/ui/badge";
import { GITHUB_USERNAME, TWITTER_USERNAME, DISCORD_INVITE, EMAIL_ADDRESS } from "@/constants";

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "Spectre",
            description: "Custom Discord application designed for private communities",
            technologies: ["TypeScript", "Discord API", "MySQL"],
            githubUrl: "https://github.com/Kewwie/Spectre",
            liveUrl: null
        },
        {
            id: 2,
            title: "Guardian",
            description: "Discord application for moderation, management, and customization",
            technologies: ["TypeScript", "Discord API", "PostgreSQL"],
            githubUrl: "https://github.com/Kewwie/Guardian",
            liveUrl: null
        },
        {
            id: 3,
            title: "Personal Website",
            description: "My own website where I showcase my projects and and that you are looking at right now",
            technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
            githubUrl: "https://github.com/Kewwie/Website",
            liveUrl: "https://kewwie.com"
        }
    ]

    return (
        <main className="container py-12 space-y-24">
            <section className="space-y-12">
                {/* Hero with profile and social links */}
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-700 glow">
                        <Image
                            src="/kewi-icon.png"
                            alt="Profile Picture"
                            width={128}
                            height={128}
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-4 max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            <span className="text-white">Hello, I'm </span>
                            <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent glow-text">
                                Kewi
                            </span>
                        </h1>
                        <p className="text-xl text-zinc-400">Swedish Developer</p>
                    </div>

                    <div className="flex space-x-4">
                        <Link 
                            href={"https://github.com/" + GITHUB_USERNAME}
                            target="_blank"
                            className="bg-gradient-to-br from-zinc-600 to-zinc-900 p-3 rounded-full border border-zinc-700 hover:from-zinc-500 hover:to-zinc-700 transition-all glow-sm"
                        >
                            <FaGithub size={20} />
                        </Link>
                        <Link 
                            href={"https://x.com/" + TWITTER_USERNAME}
                            target="_blank"
                            className="bg-gradient-to-br from-zinc-600 to-zinc-900 p-3 rounded-full border border-zinc-700 hover:from-zinc-500 hover:to-zinc-700 transition-all glow-sm"
                        >
                            <FaTwitter size={20} />
                        </Link>
                        <Link
                            href={DISCORD_INVITE}
                            target="_blank"
                            className="bg-gradient-to-br from-zinc-600 to-zinc-900 p-3 rounded-full border border-zinc-700 hover:from-zinc-500 hover:to-zinc-700 transition-all glow-sm"
                        >
                            <FaDiscord size={20} />
                        </Link>
                        <Link 
                            href={"mailto:" + EMAIL_ADDRESS}
                            target="_self"
                            className="bg-gradient-to-br from-zinc-600 to-zinc-900 p-3 rounded-full border border-zinc-700 hover:from-zinc-500 hover:to-zinc-700 transition-all glow-sm"
                        >
                            <MdEmail size={20} />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="pt-16">                
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-bold mb-10">
                            About Me
                        </h2>
                        <div className="space-y-6">
                            <p className="text-zinc-400">
                                Soon
                            </p>
                            <p className="text-zinc-400">
                                Coming
                            </p>
                            <p className="text-zinc-400">
                                Soon
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>

                        <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 glow-sm">
                            <h4 className="text-lg font-medium mb-2">Languages</h4>
                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-gradient-to-br from-zinc-700 to-zinc-900 text-zinc-300">TypeScript</Badge>
                                <Badge className="bg-gradient-to-br from-zinc-700 to-zinc-900 text-zinc-300">JavaScript</Badge>
                                <Badge className="bg-gradient-to-br from-zinc-700 to-zinc-900 text-zinc-300">Python</Badge>
                                <Badge className="bg-gradient-to-br from-zinc-700 to-zinc-900 text-zinc-300">C++</Badge>
                            </div>
                        </div>

                        <div className="p-4 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 glow-sm">
                            <h4 className="text-lg font-medium mb-2">Databases</h4>
                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-gradient-to-br from-zinc-700 to-zinc-900 text-zinc-300">SQLite</Badge>
                                <Badge className="bg-gradient-to-br from-zinc-700 to-zinc-900 text-zinc-300">MySQL</Badge>
                                <Badge className="bg-gradient-to-br from-zinc-700 to-zinc-900 text-zinc-300">PostgreSQL</Badge>
                                <Badge className="bg-gradient-to-br from-zinc-700 to-zinc-900 text-zinc-300">MongoDB</Badge>
                            </div>
                        </div>

                        <div className="p-4 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 glow-sm">
                            <h4 className="text-lg font-medium mb-2">Tools & Platforms</h4>
                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-gradient-to-br from-zinc-700 to-zinc-900 text-zinc-300">Docker</Badge>
                                <Badge className="bg-gradient-to-br from-zinc-700 to-zinc-900 text-zinc-300">Docker Compose</Badge>
                                <Badge className="bg-gradient-to-br from-zinc-700 to-zinc-900 text-zinc-300">Git</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">GitHub Projects</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Some of my GitHub projects that I've worked on
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-800 rounded-lg overflow-hidden glow-sm">
                        <div className="p-4 pb-0">
                            <h3 className="text-white font-medium text-lg">{project.title}</h3>
                            <p className="text-zinc-400 text-sm">{project.description}</p>
                        </div>
                        <div className="p-4">
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                <Badge badgeKey={tech} className="bg-gradient-to-br from-zinc-800 to-zinc-900 text-zinc-300">
                                    {tech}
                                </Badge>
                                ))}
                            </div>
                        </div>
                        <div className="p-4 flex justify-between mt-auto">
                            <Link href={project.githubUrl} className="flex items-center px-2 py-1 text-sm border border-zinc-700 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors">
                                <FaGithub className="mr-2 h-4 w-4" />
                                View Code
                            </Link>
                            {project.liveUrl && (
                                <Link href={project.liveUrl} className="flex items-center px-2 py-1 text-sm rounded-md bg-zinc-700 hover:bg-zinc-600 transition-colors">
                                    <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                                    View Live
                                </Link>
                            )}
                        </div>
                    </div>
                    ))}
                </div>
                <div className="flex justify-center">
                <Link
                    className="flex items-center px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition-colors"
                    href="https://github.com/Kewwie"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="mr-2 h-4 w-4" />
                    View More on GitHub
                </Link>
                </div>
            </section>
        </main>
    )
}