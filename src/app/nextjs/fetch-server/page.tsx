import { H4 } from '@/components/common/Heading';
import Loading from '@/components/common/Loading';
import UserList from '@/components/ressource/user/UserList';
import { getUserList } from '@/lib/api/user';
import { Suspense } from 'react';
import { RiNextjsFill } from 'react-icons/ri';

const NextjsFetchServerPageWithSuspense = async () => {
    const users = await getUserList();

    return (
        <div className="flex-1 flex flex-col gap-8">
            <H4>
                <RiNextjsFill />
                Server side data fetching
            </H4>
            <p>Server side data fetching using Nextjs server components and React Suspense</p>
            <UserList users={users} />
        </div>
    );
};

const NextjsFetchServerPage = () => {
    return (
        <Suspense fallback={<Loading />}>
            <NextjsFetchServerPageWithSuspense />
        </Suspense>
    );
};

export default NextjsFetchServerPage;
