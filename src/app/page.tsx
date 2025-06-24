'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

export default function Home() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center gap-8">
            <div className="flex flex-col items-end">
                <div className="flex flex-col text-neutral-500">
                    <div className="text-5xl lg:text-7xl leading-none bg-linear-to-br from-orange-300 to-rose-400 to-70% bg-clip-text text-transparent">
                        <div className="font-mono leading-none text-right">31st’</div>
                        <div className="flex items-end lg:text-9xl font-bold">
                            Ex
                            <div className="font-mono font-thin text-2xl lg:text-3xl">
                                {'{'}amples{'}'}
                            </div>
                        </div>
                    </div>
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
