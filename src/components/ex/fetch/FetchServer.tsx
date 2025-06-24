import Loading from '@/components/common/Loading';
import UserList from '@/components/ressource/user/UserList';
import { getUserList } from '@/lib/api/user';
import { Suspense } from 'react';

const FetchServerWithSuspense = async () => {
    const users = await getUserList();

    return <UserList users={users} />;
};

const FetchServer = () => {
    return (
        <Suspense fallback={<Loading />}>
            <FetchServerWithSuspense />
        </Suspense>
    );
};

export default FetchServer;
