"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ButtonStyle from "@/components/ui/button";

export default function ContactPage() {
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement your email submission logic here
        console.log('Email:', email);
        console.log('Topic:', topic);
        console.log('Message:', message);

        // Clear the form after submission (optional)
        setEmail('');
        setTopic('');
        setMessage('');
        alert("Your message has been sent!");
    };

    return (

        <main className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="bg-gradient-to-br from-zinc-700 to-zinc-900 p-16 m-6 rounded-lg shadow-2xl text-white text-4xl transform transition-transform duration-500 hover:scale-105">
                    <span className="block">Coming Soon</span>
                    <p className="mt-4 text-base text-slate-300">
                        For inquiries, please contact{" "}
                        <Link href="mailto:me@kewwie.com" className="underline text-blue-400 hover:text-blue-300">
                            me@kewwie.com
                        </Link>
                    </p>
                    <div className="mt-6">
                        <Link href="/">
                            <ButtonStyle>
                                Go To Home
                            </ButtonStyle>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden">
                <h1 className="text-4xl font-bold text-white mb-6 text-center">
                    Contact Me
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-slate-300 mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-gradient-to-br from-zinc-600 to-zinc-800 border border-zinc-700 rounded text-white focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="topic" className="block text-slate-300 mb-2">
                            Topic
                        </label>
                        <input
                            type="text"
                            id="topic"
                            name="topic"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-gradient-to-br from-zinc-600 to-zinc-800 border border-zinc-700 rounded text-white focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-slate-300 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={6}
                            className="w-full px-3 py-2 bg-gradient-to-br from-zinc-600 to-zinc-800 border border-zinc-700 rounded text-white focus:outline-none resize-none"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <ButtonStyle>
                                Go To Home
                            </ButtonStyle>
                        </Link>
                         <button type="submit">
                            <ButtonStyle>
                                Send Message
                            </ButtonStyle>
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}