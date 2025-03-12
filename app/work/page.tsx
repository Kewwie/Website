import React from 'react';
import Link from 'next/link';
import ButtonStyle from "@/components/ui/button";

export default function WorkPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    My Work
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-400 mb-4 max-w-2xl">
                    My work page is coming soon!
                </p>
                
                <div className="mb-4">
                    <p className="text-slate-500">
                        I&apos;m currently on this page.
                    </p>
                    <p className="text-emerald-600 font-medium mt-2">
                        Check back soon for more information
                    </p>
                </div>
                
                <Link href="/">
                    <ButtonStyle>
                        Go To Home
                    </ButtonStyle>
                </Link>
            </div>
        </main>
    );
}