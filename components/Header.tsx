import Image from "next/image";
import icon from "@/public/assets/icon.png";

export default function Header() {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex items-center p-2 justify-between">
                <Image src={icon} alt="Kewi icon" width={50} height={50}/>
                <div className=" flex items-center justify-between gap-9">
                    <a href="/" className="text-lg font-semibold text-gray-900 rounded-md hover:bg-opacity-25 hover:bg-gray-800 py-1 px-3">
                        Home
                    </a>
                    <a href="/projects" className="text-lg font-semibold text-gray-900 rounded-md hover:bg-opacity-25 hover:bg-gray-800 py-1 px-3">
                        Projects
                    </a>
                    <a href="/experiences" className="text-lg font-semibold text-gray-900 rounded-md hover:bg-opacity-25 hover:bg-gray-800 py-1 px-3">
                        Experiences
                    </a>
                    <a href="/hire" className="text-lg font-semibold text-gray-900 rounded-md hover:bg-opacity-25 hover:bg-gray-800 py-1 px-3">
                        Hire
                    </a>
                </div>
                <div className="text-white">.</div>
            </nav>
        </header>
    )
}