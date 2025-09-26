'use client';

import { H5, H6 } from '@/components/common/Heading';
import { PropClassName } from '@/types/typesGlobal';
import Image from 'next/image';

import { ComponentProps, PropsWithChildren, createContext, use } from 'react';
import { twMerge } from 'tailwind-merge';

type UserCardProps = PropsWithChildren & PropClassName;

type UserCardNameProps = PropsWithChildren;

type NextImageProps = ComponentProps<typeof Image>;
// Liskov Substitution principle ( Subtype objects should be substitutable for supertype objects )
type UserCardImageProps = NextImageProps;

type UserCardDescriptionProps = PropsWithChildren & PropClassName;

type UserCardSkillsProps = {
    skills: string[];
} & PropClassName;

interface UserCardContextData {
    checked: boolean;
}

// Context
const UserCardContext = createContext<UserCardContextData | undefined>(undefined);

// Hook
const useUserCardContext = () => {
    const context = use(UserCardContext);
    if (context === undefined) {
        throw new Error("UserCard component's must be wrapped in a UserCardContextProvider");
    }

    return context;
};

const UserCard = ({ children, className = undefined }: UserCardProps) => {
    return (
        <UserCardContext value={{ checked: true }}>
            <div
                className={twMerge(
                    'flex flex-wrap gap-4 p-4 bg-neutral-50 rounded-xl shadow-lg border border-neutral-200',
                    className
                )}
            >
                {children}
            </div>
        </UserCardContext>
    );
};

const UserCardName = ({ children }: UserCardNameProps) => {
    useUserCardContext();

    return (
        <div className="flex flex-col gap-1">
            <H6 className="text-xs uppercase">Name</H6>
            <H5>{children}</H5>
        </div>
    );
};

const UserCardImage = (props: UserCardImageProps) => {
    useUserCardContext();

    const { src, className, ...rest } = props;

    return (
        <Image
            className={twMerge('rounded-lg aspect-square max-w-[150px] max-h-[150px]', className)}
            src={src}
            width={150}
            height={150}
            {...rest}
        />
    );
};

const UserCardDescription = ({ children, className = undefined }: UserCardDescriptionProps) => {
    useUserCardContext();

    return (
        <div className="flex flex-col gap-1">
            <H6 className="text-xs uppercase">Description</H6>
            <div
                className={twMerge(
                    'p-4 text-sm bg-white text-neutral-500 border rounded-lg',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};

const UserCardSkills = ({ skills, className = undefined }: UserCardSkillsProps) => {
    useUserCardContext();

    return (
        <div className="flex flex-col gap-1">
            <H6 className="text-xs uppercase">Skills</H6>
            <div
                className={twMerge(
                    'p-4 text-sm bg-white text-neutral-500 border rounded-lg',
                    className
                )}
            >
                <ul className="list-disc list-inside text-sm text-neutral-500">
                    {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

UserCard.Name = UserCardName;
UserCard.Image = UserCardImage;
UserCard.Description = UserCardDescription;
UserCard.Skills = UserCardSkills;

export default UserCard;
