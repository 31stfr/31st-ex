'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { PropClassName } from '@/types/typesGlobal';
import Link from 'next/link';
import { FaCaretRight } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

interface AsideProps extends PropClassName {}

const Aside = ({ className = undefined }: AsideProps) => {
    return (
        <aside className={twMerge('flex pt-10 min-w-56 max-h-screen', 'z-10', className)}>
            <menu
                className={twMerge(
                    'flex-1 p-8 flex flex-col gap-1 pt-24 overflow-y-auto',
                    'bg-white rounded-tr-3xl shadow-xl-r shadow-orange-900 outline-8 outline-white/30'
                )}
            >
                <Link href={'/'} className="font-mono text-sm py-2">
                    Home
                </Link>
                <Popover>
                    <AsidePopoverTrigger label={'React basics'} />
                    <AsidePopoverContent />
                </Popover>
                <Popover>
                    <AsidePopoverTrigger label={'Javascript basics'} />
                    <AsidePopoverContent />
                </Popover>
                {/* // @TODO-delete */}
                {/* // @TODO-delete */}
                {/* {Array(100)
                    .fill(0)
                    .map((_, i) => {
                        return (
                            <div key={i.toString()} className="font-mono text-sm py-2">
                                iam here {i}
                            </div>
                        );
                    })} */}
            </menu>
        </aside>
    );
};

interface AsidePopoverTriggerProps {
    label: string;
}

const AsidePopoverTrigger = ({ label }: AsidePopoverTriggerProps) => {
    return (
        <PopoverTrigger className="flex items-center gap-1 py-2 group cursor-pointer">
            <span className="font-mono text-sm">{label}</span>
            <FaCaretRight className="ml-auto rotate-90 group-hover:rotate-0 text-neutral-400 transition-transform" />
        </PopoverTrigger>
    );
};

const AsidePopoverContent = () => {
    return (
        <PopoverContent side="right" className="flex flex-col gap-1 font-mono text-sm">
            <div>Array of objects multi sort</div>
            <div>Promises</div>
            <div>Something else</div>
            <div>Array of objects multi sort</div>
            <div>Promises</div>
            <div>Something else</div>
            <div>Array of objects multi sort</div>
            <div>Promises</div>
            <div>Something else</div>
            <div>Array of objects multi sort</div>
            <div>Promises</div>
            <div>Something else</div>
            <div>Array of objects multi sort</div>
            <div>Promises</div>
            <div>Something else</div>
        </PopoverContent>
    );
};

export default Aside;
