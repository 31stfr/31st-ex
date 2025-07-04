import { H4 } from '@/components/common/Heading';
import FetchClient from '@/components/ex/fetch/FetchClient';
import { getUserList } from '@/lib/api/user';
import Link from 'next/link';
import { FaReact } from 'react-icons/fa6';

const getUserListPromise = getUserList().catch((_error) => {
    return 'Error while fetching user list';
});

const ReactBasicsFetchPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-8">
            <H4>
                <FaReact />
                Client side data fetching
            </H4>
            <div>
                Client side data fetching using standard fetch API, React Suspense and React "use"
                hook.
                <br />
                React documentation ressources:
                <br />
                <ul className="list-inside pl-4">
                    <li>
                        <Link href="https://react.dev/reference/react/use#streaming-data-from-server-to-client">
                            Streaming data from the server to the client
                        </Link>
                    </li>
                    <li>
                        <Link href="https://react.dev/reference/react/use#providing-an-alternative-value-with-promise-catch">
                            Providing an alternative value with Promise.catch
                        </Link>
                    </li>
                </ul>
            </div>
            <FetchClient getUserListPromise={getUserListPromise} />
        </div>
    );
};

export default ReactBasicsFetchPage;
