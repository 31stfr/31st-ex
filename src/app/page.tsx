'use client';

import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center gap-8">
            <div className="flex flex-col items-end">
                <div className="text-white bg-rose-400 rounded-3xl p-3 py-0 rotate-6">31st’</div>
                <div className="font-mono text-5xl text-gray-600">
                    <span className="font-bold">Ex</span>
                    <span className="text-gray-400">amples</span>
                </div>
            </div>
            <p className="text-center">
                This project/repository is a collection of code examples related to the{' '}
                <Link href="https://31st.fr">31st.fr</Link>’ website's blog.
                <br />
                Feel free to clone it and use it for your own projects or just for learning, testing
                or whatever you want.
            </p>
            <div>Repo link + 31st blog link</div>
        </div>
    );
}
