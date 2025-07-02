import { User } from '@/types/api/User';
import UserDisplay from './User';

interface UserListProps {
    users: User[];
}

const UserList = ({ users }: UserListProps) => {
    return (
        <div className="flex flex-col gap-4">
            {users.map((user) => {
                const key = `user-${user.id}`;

                return <UserDisplay key={key} user={user} />;
            })}
        </div>
    );
};

export default UserList;
