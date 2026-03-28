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
                    'w-full h-screen grid grid-rows-[auto_1fr] grid-cols-1 place-items-stretch lg:overflow-y-hidden',
                    'bg-linear-to-br from-orange-300 to-rose-400 to-70%',
                )}
            >
                <div className="absolute -top-12 -translate-y-1/2 -left-8 flex justify-end items-end p-4  w-64 h-64 rotate-45 rounded-br-3xl shadow-xl-r shadow-orange-400 bg-white/85 outline-8 outline-white/30 border border-white z-50">
                    <div className="text-lg text-neutral-500">
                        <span className="text-neutral-400">31st’&nbsp;</span>
                        <span className="font-mono font-bold text-4xl">Ex</span>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-end items-end lg:items-center gap-4 p-2">
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
                <div className="min-h-0 grid grid-cols-1 lg:grid-cols-[1fr_5fr] place-items-stretch gap-8 lg:gap-12 pt-4 lg:overflow-y-hidden">
                    <Aside
                        className="flex"
                        menuClassName="rounded-3xl lg:rounded-l-none lg:rounded-br-none"
                    />
                    <main className="min-h-fit flex gap-4 p-8 bg-white rounded-t-3xl lg:rounded-tr-none outline-8 outline-white/30 lg:overflow-y-hidden">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
