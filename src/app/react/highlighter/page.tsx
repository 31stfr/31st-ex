import { H4 } from '@/components/common/Heading';
import Loading from '@/components/common/Loading';
import TodoList from '@/components/ex/highlighter/TodoList';
import { getTodoList } from '@/lib/api/todo';
import { toErrorData } from '@/lib/utils';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaReact } from 'react-icons/fa6';

// No "await" here to ensure the Promise is resolved client side
const getTodoListPromise = getTodoList().catch((error) => {
    const { message } = toErrorData(error);

    return message;
});

const ReactHighlighterPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-8">
            <H4>
                <FaReact />
                Search results highlighter and "useTransition" hook
            </H4>
            <div>
                An example of how to filter a list of items based on a search input and highlight
                the results. This example uses the "
                <Link href="https://react.dev/reference/react/useTransition">useTransition</Link>"
                hook. A perfect way to learn the basics of React.
            </div>
            <Suspense fallback={<Loading />}>
                <TodoList getTodoListPromise={getTodoListPromise} />
            </Suspense>
        </div>
    );
};

export default ReactHighlighterPage;
