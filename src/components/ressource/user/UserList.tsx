'use client';

import { User } from '@/types/api/User';
import UserDisplay from './UserDisplay';

interface UserListProps {
    users: User[];
}

const UserList = ({ users }: UserListProps) => {
    return (
        <div className="flex flex-col gap-4">
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
