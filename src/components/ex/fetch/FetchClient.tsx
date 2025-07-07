'use client';

import ResultMessage from '@/components/common/ResultMessage';
import UserList from '@/components/ressource/user/UserList';
import { User } from '@/types/api/User';
import { use } from 'react';

interface FetchClienProps {
    getUserListPromise: Promise<User[] | string>;
}

const FetchClient = ({ getUserListPromise }: FetchClienProps) => {
    const result = use(getUserListPromise);

    // Error handling
    if ('string' === typeof result) {
        return <ResultMessage type={'error'} content={result} className="justify-center" />;
    }

    return <UserList users={result} />;
};

export default FetchClient;
