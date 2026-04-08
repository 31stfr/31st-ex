'use client';

import { H1 } from '@/components/common/Heading';
import { FaQuoteLeft, FaQuoteRight, FaSpaghettiMonsterFlying } from 'react-icons/fa6';

const Error = () => {
    return (
        <div className="flex-1 flex flex-col justify-center items-center gap-8">
            <div className="flex justify-center items-center size-28 rounded-full border-2 border-dashed border-neutral-400 animate-spin animation-duration-[10s]">
                <FaSpaghettiMonsterFlying className="text-5xl text-rose-300 animate-spin animation-duration-[6s] direction-[reverse]" />
            </div>
            <H1>Something went wrong</H1>
            <div className="flex gap-4">
                <FaQuoteLeft className="text-orange-300 text-xl" />
                <blockquote>
                    <div className="flex gap-1 text-2xl text-neutral-500">
                        What the hell is going on around here ?
                    </div>
                    <div className="text-right text-neutral-400 font-mono">Suicidal tendencies</div>
                </blockquote>
                <FaQuoteRight className="text-orange-300 text-xl" />
            </div>

            <p>An error occurred while loading this page</p>
        </div>
    );
};

export default Error;
