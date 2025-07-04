'use client';

import Loading from '@/components/common/Loading';
import ResultMessage from '@/components/common/ResultMessage';
import UserList from '@/components/ressource/user/UserList';
import { User } from '@/types/api/User';
import { Suspense, use } from 'react';

interface FetchClientWithSuspenseProps {
    getUserListPromise: Promise<User[] | string>;
}

const FetchClientWithSuspense = ({ getUserListPromise }: FetchClientWithSuspenseProps) => {
    const result = use(getUserListPromise);

    // Error handling
    if ('string' === typeof result) {
        return <ResultMessage type={'error'} content={result} className="justify-center" />;
    }

    return <UserList users={result} />;
};

const FetchClient = (props: FetchClientWithSuspenseProps) => {
    return (
        <Suspense fallback={<Loading />}>
            <FetchClientWithSuspense {...props} />
        </Suspense>
    );
};

export default FetchClient;
