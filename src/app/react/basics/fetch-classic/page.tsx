'use client';

import { H4 } from '@/components/common/Heading';
import Loading from '@/components/common/Loading';
import ResultMessage from '@/components/common/ResultMessage';
import UserList from '@/components/ressource/user/UserList';
import { getUserList } from '@/lib/api/user';
import { User } from '@/types/api/User';
import { log } from 'console';
import { useEffect, useState } from 'react';
import { FaReact } from 'react-icons/fa6';

const ReactBasicsFetchClassicPage = () => {
    // Loading status
    const [loading, setLoading] = useState(true);
    // Error status
    const [error, setError] = useState<string | undefined>(undefined);
    // User list
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        const fetchUserList = async () => {
            try {
                const users = await getUserList();

                setUsers(users);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else if ('string' === typeof error) {
                    setError(error);
                } else {
                    setError('Error while fetching user list...');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUserList();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ResultMessage type={'error'} content={error} className="justify-center" />;
    }

    return (
        <div className="flex-1 flex flex-col gap-8">
            <H4>
                <FaReact />
                Client side data fetching with "useEffect" and "useState" (classic pattern)
            </H4>
            <UserList users={users} />
        </div>
    );
};

export default ReactBasicsFetchClassicPage;
