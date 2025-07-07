import { H4 } from '@/components/common/Heading';
import Loading from '@/components/common/Loading';
import FetchClient from '@/components/ex/fetch/FetchClient';
import { getUserList } from '@/lib/api/user';
import { toErrorData } from '@/lib/utils';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaReact } from 'react-icons/fa6';

// No "await" here to ensure the Promise is resolved client side
const getUserListPromise = getUserList().catch((error) => {
    const { message } = toErrorData(error);

    return message;
});

const ReactBasicsFetchPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-8">
            <H4>
                <FaReact />
                Client side data fetching with Suspense and "use" hook
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
            <Suspense fallback={<Loading />}>
                <FetchClient getUserListPromise={getUserListPromise} />
            </Suspense>
        </div>
    );
};

export default ReactBasicsFetchPage;
