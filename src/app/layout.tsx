import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Aside from './components/global/Aside';
import './globals.css';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

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
                    'bg-linear-to-br from-orange-300 to-rose-400 to-70%',
                    'flex'
                )}
            >
                <div className="flex justify-end items-end p-4 absolute -top-12 -translate-y-1/2 -left-8 w-64 h-64 rotate-45 rounded-br-3xl shadow-xl-r shadow-orange-400 bg-white/85 outline-8 outline-white/30 border border-white z-50">
                    <div className="text-lg text-neutral-500">
                        <span className="text-neutral-400">31st’ </span>
                        <span className="font-mono font-bold text-4xl">Ex</span>
                    </div>
                </div>
                {/* <div className="w-full flex justify-end items-center px-4 text-sm text-white">
                    <Link href="https://31st.fr">31st.fr</Link>
                </div> */}
                <div className="flex-1 flex flex-col lg:flex-row gap-12">
                    <Aside className="static top-0 left-0" />
                    <main className="flex-1 flex gap-4 p-8 mt-10 bg-white rounded-tl-3xl outline-8 outline-white/30">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
    /* return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased relative grid grid-cols-1 lg:grid-cols-[auto_auto_1fr] grid-rows-[40px_1fr] place-items-stretch bg-linear-to-br from-orange-300 to-rose-400 to-70%`}
            >
                <div className="flex justify-end items-end p-4 absolute -top-12 -translate-y-1/2 -left-8 w-64 h-64 rotate-45 rounded-br-3xl shadow-xl-r shadow-orange-400 bg-white/85 outline-8 outline-white/30 border border-white z-50">
                    <div className="text-lg text-neutral-500">
                        <span className="text-neutral-400">31st’ </span>
                        <span className="font-mono font-bold text-4xl">Ex</span>
                    </div>
                </div>
                <div className="col-span-full flex justify-end items-center px-4 text-sm text-white">
                    <Link href="https://31st.fr">31st.fr</Link>
                </div>
                <Aside />
                <div className="w-12 min-h-12" />
                <main className="flex gap-4 p-4 min-w-[90%] bg-white rounded-tl-3xl outline-8 outline-white/30">
                    {children}
                </main>
            </body>
        </html>
    ); */
}
