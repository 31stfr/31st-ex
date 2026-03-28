'use client';

import ResultMessage from '@/components/common/ResultMessage';
import UserList from '@/components/ressource/user/UserList';
import { User } from '@/types/api/User';
import { PropClassName } from '@/types/typesGlobal';
import { use } from 'react';

type FetchClienProps = {
    getUserListPromise: Promise<User[] | string>;
} & PropClassName;

const FetchClient = ({ className, getUserListPromise }: FetchClienProps) => {
    const result = use(getUserListPromise);

    // Error handling
    if ('string' === typeof result) {
        return <ResultMessage type={'error'} content={result} className="justify-center" />;
    }

    return <UserList users={result} className={className} />;
};

export default FetchClient;
