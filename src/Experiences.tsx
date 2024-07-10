import { FaArrowLeft } from "react-icons/fa";

export function Experiences()  {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="absolute top-0 left-0 mt-4 ml-4 flex items-center opacity-50 hover:opacity-25">
                <FaArrowLeft className="text-white font-bold mr-1"/>
                <a className="text-white text-sm font-bold" href="/">Back</a>
            </div>
            <div className="justify-start flex flex-col items-center">
                <h1 className="mt-16 text-4xl text-white text-center font-bold">My Experiences Online</h1>
                <ul className="mt-4 space-y-8 flex flex-col">
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">Birb Paradise</h1>
                        <p className="text-sm">Moderator - Co-Owner</p>
                        <p className="text-lg">September 26th, 2022 - Present</p>
                        <a className="border-2 border-white border-opacity-75 rounded py-1 px-2 bg-transparent text-white text-sm font-bold hover:opacity-25" href="https://discord.gg/74cHUzkZQt" >Join Server</a>
                    </li>
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">Fire Nation</h1>
                        <p className="text-sm">Helper - Moderator</p>
                        <p className="text-lg">October 13th, 2023 - Present</p>
                        <a className="border-2 border-white border-opacity-75 rounded py-1 px-2 bg-transparent text-white text-sm font-bold hover:opacity-25" href="https://discord.gg/preston" >Join Server</a>
                    </li>
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">Wednesday</h1>
                        <p className="text-sm">Owner</p>
                        <p className="text-lg">December 6th, 2022 - Present</p>
                        <a className="border-2 border-white border-opacity-75 rounded py-1 px-2 bg-transparent text-white text-sm font-bold hover:opacity-25" href="https://discord.gg/F6KkrSqpzZ" >Join Server</a>
                    </li>
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">Sounds</h1>
                        <p className="text-sm">Owner</p>
                        <p className="text-lg">July 31st, 2023 - Present</p>
                        <a className="border-2 border-white border-opacity-75 rounded py-1 px-2 bg-transparent text-white text-sm font-bold hover:opacity-25" href="https://discord.gg/VxFME5AkKk" >Join Server</a>
                    </li>
                    <li className="text-white">
                        <h1 className="font-bold text-2xl">Starz</h1>
                        <p className="text-sm">Moderator - Admin</p>
                        <p className="text-lg">January 7th, 2024 - June 14th, 2024</p>
                        <a className="border-2 border-white border-opacity-75 rounded py-1 px-2 bg-transparent text-white text-sm font-bold hover:opacity-25" href="https://discord.gg/UdPJQJRFVz" >Join Server</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}