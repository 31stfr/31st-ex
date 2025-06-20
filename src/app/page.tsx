'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

export default function Home() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center gap-8">
            <div className="flex flex-col items-end">
                <div className="relative font-mono text-neutral-500">
                    <div className="absolute -left-2 top-2 text-white bg-neutral-500 rounded-3xl p-3 py-0 -rotate-[30deg]">
                        31st’
                    </div>
                    <span className="text-[8rem] leading-none font-bold bg-linear-to-tr from-orange-300 to-rose-400 to-70% bg-clip-text text-transparent">
                        Ex
                    </span>
                    <span className="font-thin text-5xl">amples</span>
                </div>
            </div>
            <p className="text-center">
                This project/repository is a collection of code examples related to the{' '}
                <Link href="https://31st.fr">31st.fr</Link>’ website's blog.
                <br />
                Feel free to clone it and use it for your own projects or just for learning, testing
                or whatever you want.
            </p>
            <div className="flex items-center gap-8">
                {/* // @TODO: URL REPO */}
                {/* // @TODO: URL REPO */}
                {/* // @TODO: URL REPO */}
                <Link
                    href="https://github.com/31st-examples"
                    className="h-16 w-16 text-white text-3xl bg-neutral-500 rounded-xl flex justify-center items-center"
                >
                    <FaGithub />
                </Link>
                <Link
                    href="https://31st.fr"
                    className="h-16 w-16 text-white bg-neutral-500 rounded-xl flex justify-center items-center"
                >
                    31st.fr
                </Link>
            </div>
        </div>
    );
}
