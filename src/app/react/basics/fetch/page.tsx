import { H4, H5 } from '@/components/common/Heading';
import FetchClient from '@/components/ex/fetch/FetchClient';
import FetchServer from '@/components/ex/fetch/FetchServer';
import { getUserList } from '@/lib/api/user';
import { FaReact } from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';

const ReactBasicsFetchPage = () => {
    return (
        <div className="flex-1 grid grid-cols-2 grid-rows-[auto_auto_1fr] gap-8 place-items-stretch">
            <H4 className="col-span-full">Fetching data with React and Nextjs</H4>
            <H5>
                <FaReact />
                Client side
            </H5>
            <H5>
                <RiNextjsFill />
                Server side
            </H5>
            <FetchClient getUserListPromise={getUserList()} />
            <FetchServer />
        </div>
    );
};

export default ReactBasicsFetchPage;
