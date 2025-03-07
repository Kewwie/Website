import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
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
                        <Link href="https://github.com/yourusername" target="_blank">
                            <Image src="/icon.png" alt="GitHub" width={40} height={40} />
                        </Link>
                        <Link href="https://twitter.com/yourusername" target="_blank">
                            <Image src="/icon.png" alt="Twitter" width={40} height={40} />
                        </Link>
                        <Link href="https://discord.com/users/yourusername" target="_blank">
                            <Image src="/icon.png" alt="Discord" width={40} height={40} />
                        </Link>
                        <Link href="mailto:yourname@example.com" target="_blank">
                            <Image src="/icon.png" alt="Email" width={40} height={40} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}