import React from 'react';
import Link from 'next/link';

import ButtonStyle from "@/components/ui/button";

import { EMAIL_ADDRESS } from "@/constants";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Contact Me
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-400 mb-4 max-w-2xl">
                    My contact page is coming soon!
                </p>
                
                <div className="mb-4">
                    <p className="text-slate-500">
                        In the meantime, you can reach me at:
                    </p>
                    <p className="text-emerald-600 font-medium mt-2">
                        {EMAIL_ADDRESS}
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