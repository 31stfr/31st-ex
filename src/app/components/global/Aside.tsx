'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { PropClassName } from '@/types/typesGlobal';
import { MenuItem } from '@/types/typesUi';
import Link from 'next/link';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { FaCaretRight, FaReact } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import { RiNextjsFill } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { twMerge } from 'tailwind-merge';

interface AsideProps extends PropClassName {
    menuClassName?: string;
}

type AsidePopoverTriggerProps = Pick<MenuItem, 'label' | 'icon'>;

interface AsidePopoverContentProps {
    menuItem: MenuItem;
    setOpen: Dispatch<SetStateAction<string | undefined>>;
}

const Aside = ({ className = undefined, menuClassName = undefined }: AsideProps) => {
    const [open, setOpen] = useState<string | undefined>(undefined);

    return (
        <aside className={twMerge('flex pt-10 min-w-56 max-h-screen', 'z-10', className)}>
            <menu
                className={twMerge(
                    'flex-1 p-8 flex flex-col gap-1 pt-24 overflow-y-auto',
                    'bg-white shadow-xl-r shadow-orange-900 outline-8 outline-white/30',
                    menuClassName
                )}
            >
                <Link href={'/'} className="font-mono text-sm py-2">
                    Home
                </Link>
                {menuItems.map((menuItem) => {
                    const { key, icon, label } = menuItem;

                    return (
                        <Popover
                            key={key}
                            open={open === key}
                            onOpenChange={(open) => setOpen(open ? key : undefined)}
                        >
                            <AsidePopoverTrigger icon={icon} label={label} />
                            <AsidePopoverContent menuItem={menuItem} setOpen={setOpen} />
                        </Popover>
                    );
                })}
            </menu>
        </aside>
    );
};

const AsidePopoverTrigger = ({ icon, label }: AsidePopoverTriggerProps) => {
    return (
        <PopoverTrigger className="flex items-center gap-1 py-2 group cursor-pointer">
            <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-lg text-neutral-300">{icon}</span>
                {label}
            </div>
            <FaCaretRight className="ml-auto rotate-90 group-hover:rotate-0 text-neutral-400 transition-transform" />
        </PopoverTrigger>
    );
};

const AsidePopoverContent = ({ menuItem: { items, icon }, setOpen }: AsidePopoverContentProps) => {
    return (
        <PopoverContent
            side="right"
            className="flex flex-col gap-1 font-mono text-sm w-auto"
            onClick={() => new KeyboardEvent('keydown', { key: 'Escape' })}
        >
            <div className="flex items-center justify-center text-2xl text-neutral-300">{icon}</div>
            {items.map(({ label, href }) => {
                return (
                    <Link
                        key={label}
                        href={href}
                        className="py-2"
                        onClick={() => setOpen(undefined)}
                    >
                        {label}
                    </Link>
                );
            })}
        </PopoverContent>
    );
};

const menuItems: MenuItem[] = [
    {
        key: 'react',
        label: 'React',
        icon: <FaReact />,
        items: [
            {
                label: 'Client side data fetching: Classic pattern',
                href: '/react/fetch-classic',
            },
            {
                label: 'Client side data fetching with Suspense and "use" hook',
                href: '/react/fetch',
            },
            {
                label: 'Search results highlighter and "useTransition" hook',
                href: '/react/highlighter',
            },
        ],
    },
    {
        key: 'nextjs',
        label: 'Next.js',
        icon: <RiNextjsFill />,
        items: [{ label: 'Server side data fetching', href: '/nextjs/fetch-server' }],
    },
    /* {
        key: 'javascript',
        label: 'Javascript',
        icon: <IoLogoJavascript />,
        items: [],
    }, */
    {
        key: 'tailwindcss',
        label: 'Tailwind Css',
        icon: <SiTailwindcss />,
        items: [
            { label: 'React and Tailwind CSS simple progress indicator', href: '/twcss/loading' },
        ],
    },
] as const;

export default Aside;
