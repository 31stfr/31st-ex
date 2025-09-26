'use client';

import { H5, H6 } from '@/components/common/Heading';
import { PropClassName } from '@/types/typesGlobal';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type BadUserCardProps = {
    className?: string;
    name: string;
    imageAlt: string;
    imageSrc: string;
    description: string;
    skills: string[];
};

const BadUserCard = ({
    name,
    imageAlt,
    imageSrc,
    description,
    skills,
    className,
}: BadUserCardProps) => {
    return (
        <div
            className={twMerge(
                'grid grid-cols-[auto_1fr] gap-4 p-4 bg-neutral-50 rounded-xl shadow-lg border border-neutral-200',
                className
            )}
        >
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={150}
                height={150}
                className="rounded-lg max-w-[150px] max-h-[150px]"
            />
            <H5>{name}</H5>
            <div className="p-4 text-sm bg-white text-neutral-500 border rounded-lg">
                <ul>
                    {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
            <p className="p-4 text-sm bg-white text-neutral-500 border rounded-lg">{description}</p>
        </div>
    );
};

export default BadUserCard;
