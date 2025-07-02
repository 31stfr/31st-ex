'use client';

import { H6 } from '@/components/common/Heading';
import { User } from '@/types/api/User';
import Link from 'next/link';
import { FaLocationPin } from 'react-icons/fa6';

interface UserProps {
    user: User;
}

const UserDisplay = ({ user }: UserProps) => {
    return (
        <div className="flex flex-col gap-1">
            <H6>{user.username}</H6>
            <p className="text-sm text-neutral-400">
                {user.name} / <Link href={`mailto:${user.email}`}>{user.email.toLowerCase()}</Link>
            </p>
            <address className="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2 text-sm text-neutral-500">
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
        </div>
    );
};

export default UserDisplay;
