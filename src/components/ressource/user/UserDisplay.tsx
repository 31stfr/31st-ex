'use client';

import { H6 } from '@/components/common/Heading';
import { User } from '@/types/api/User';
import { PropClassName } from '@/types/typesGlobal';
import Link from 'next/link';
import { PropsWithChildren, createContext, use } from 'react';
import { FaLocationPin } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

type UserProps = {
    user: User;
} & PropsWithChildren &
    PropClassName;

type UserUserNameProps = PropClassName;
type UserEmailProps = PropClassName;
type UserNameProps = PropClassName;
type UserAddressProps = PropClassName;

type UserDisplayContextData = {
    user: User;
};

// Hook
const useUserDisplayContext = () => {
    const context = use(UserContext);
    if (!context) {
        throw new Error("User component's must be wrapped in a UserContextProvider");
    }

    return context;
};

const UserContext = createContext<UserDisplayContextData | undefined>(undefined);

const UserDisplay = ({ children, user, className = undefined }: UserProps) => {
    return (
        <UserContext value={{ user }}>
            <div className={twMerge('flex flex-col gap-1', className)}>{children}</div>
        </UserContext>
    );
};

const UserUserName = ({ className = undefined }: UserUserNameProps) => {
    const { user } = useUserDisplayContext();

    return <H6 className={className}>{user.username}</H6>;
};

const UserName = ({ className = undefined }: UserNameProps) => {
    const { user } = useUserDisplayContext();

    return <span className={twMerge('text-sm text-neutral-400', className)}>{user.name}</span>;
};

const UserEmail = ({ className = undefined }: UserEmailProps) => {
    const { user } = useUserDisplayContext();

    return (
        <Link href={`mailto:${user.email}`} className={className}>
            {user.email.toLowerCase()}
        </Link>
    );
};

const UserAddress = ({ className = undefined }: UserAddressProps) => {
    const { user } = useUserDisplayContext();

    return (
        <address
            className={twMerge(
                'grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2 text-sm text-neutral-500',
                className
            )}
        >
            <div className="row-span-full place-self-center text-neutral-200">
                <FaLocationPin />
            </div>
            <p>
                {user.address.street} - {user.address.suite}
            </p>
            <p>
                {user.address.zipcode} {user.address.city}
            </p>
        </address>
    );
};

UserDisplay.UserName = UserUserName;
UserDisplay.Name = UserName;
UserDisplay.Email = UserEmail;
UserDisplay.Address = UserAddress;

export default UserDisplay;
