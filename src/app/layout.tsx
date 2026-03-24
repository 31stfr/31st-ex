import { geistMono, geistSans } from '@/lib/fonts';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FaGithub, FaRocket } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';
import Aside from './components/global/Aside';
import './globals.css';

export const metadata: Metadata = {
    title: '31st-ex',
    description: '31st.fr code examples',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={twMerge(
                    `${geistSans.variable} ${geistMono.variable} antialiased relative`,
                    'w-full h-screen grid grid-cols-[auto_1fr] grid-rows-1 place-items-stretch overflow-y-hidden',
                    'bg-linear-to-br from-orange-300 to-rose-400 to-70%',
                )}
            >
                <div className="flex justify-end items-end p-4 fixed -top-12 -translate-y-1/2 -left-8 w-64 h-64 rotate-45 rounded-br-3xl shadow-xl-r shadow-orange-400 bg-white/85 outline-8 outline-white/30 border border-white z-50">
                    <div className="text-lg text-neutral-500">
                        <span className="text-neutral-400">31st’&nbsp;</span>
                        <span className="font-mono font-bold text-4xl">Ex</span>
                    </div>
                </div>
                <div className="absolute inset-x-0 h-10 flex justify-end items-center gap-4 px-4">
                    <Link
                        href="https://github.com/31stfr/31st-ex"
                        className="reverse flex items-center gap-1"
                    >
                        <FaGithub className="text-lg" />
                        Github repository
                    </Link>
                    <Link href="https://31st.fr" className="reverse flex items-center gap-1">
                        <FaRocket className="text-base" />
                        31st.fr
                    </Link>
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-12 overflow-y-hidden">
                    <Aside
                        className="flex lg:sticky lg:inset-y-0"
                        menuClassName="rounded-3xl lg:rounded-l-none lg:rounded-br-none"
                    />
                    <main className="flex gap-4 p-8 mt-10 bg-white rounded-t-3xl lg:rounded-tr-none outline-8 outline-white/30">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
