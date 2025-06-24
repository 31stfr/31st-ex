'use client';

import Loading from '@/components/common/Loading';
import UserList from '@/components/ressource/user/UserList';
import { User } from '@/types/api/User';
import { Suspense, use } from 'react';

interface FetchClientWithSuspenseProps {
    getUserListPromise: Promise<User[]>;
}

const FetchClientWithSuspense = ({ getUserListPromise }: FetchClientWithSuspenseProps) => {
    const users = use(getUserListPromise);

    return <UserList users={users} />;
};

const FetchClient = (props: FetchClientWithSuspenseProps) => {
    return (
        <Suspense fallback={<Loading />}>
            <FetchClientWithSuspense {...props} />
        </Suspense>
    );
};

export default FetchClient;
