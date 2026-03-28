'use client';

import { User } from '@/types/api/User';
import { PropClassName } from '@/types/typesGlobal';
import { twMerge } from 'tailwind-merge';
import UserDisplay from './UserDisplay';

type UserListProps = {
    users: User[];
} & PropClassName;

const UserList = ({ className, users }: UserListProps) => {
    return (
        <div className={twMerge('flex flex-col gap-4', className)}>
            {users.map((user) => {
                const key = `user-${user.id}`;

                return (
                    <UserDisplay key={key} user={user}>
                        <UserDisplay.UserName className="text-base" />
                        <div className="flex items-center gap-1">
                            <UserDisplay.Name />-
                            <UserDisplay.Email className="text-sm" />
                        </div>
                        <UserDisplay.Address />
                    </UserDisplay>
                );
            })}
        </div>
    );
};

export default UserList;
