import Image from 'next/image';

import KewiIcon from '../public/kewi-icon.png';
                
export default function Home() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center lg:space-x-16">
            <div className="flex justify-center">
                <Image src={KewiIcon} alt="Image" width={200} height={200} className="border-2 border-white border-opacity-25 rounded-full" />
            </div>
            <div className="flex flex-col justify-center items-center max-w-sm">
                <h1 className="text-6xl text-white">Kewwie</h1>
                <p className="text-xl text-white text-center opacity-75 md:text-lg">I manage communities online, I also spend my time coding stuff for others</p>
                <div className="flex space-x-4 my-4">
                    <a href="/projects" className="border-2 border-white border-opacity-75 rounded py-2 px-6 bg-transparent text-white text-xl font-bold">
                        Projects
                    </a>
                    <a href="/experiences" className="border-2 border-white border-opacity-75 rounded py-2 px-6 bg-transparent text-white text-xl font-bold">
                        Experiences
                    </a>
                </div>
            </div>
        </div>
    );
}
