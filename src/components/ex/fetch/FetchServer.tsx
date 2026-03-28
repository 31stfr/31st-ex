import { H4 } from '@/components/common/Heading';
import UserList from '@/components/ressource/user/UserList';
import { getUserList } from '@/lib/api/user';
import { RiNextjsFill } from 'react-icons/ri';

const NextjsFetchServerPageWithSuspense = async () => {
    const users = await getUserList();

    return (
        <div className="flex-1 grid grid-rows-[auto_auto_1fr] gap-8 overflow-y-hidden">
            <H4>
                <RiNextjsFill />
                Server side data fetching
            </H4>
            <p>Server side data fetching using Nextjs server components and React Suspense</p>
            <UserList users={users} className="overflow-y-auto" />
        </div>
    );
};

export default NextjsFetchServerPageWithSuspense;
