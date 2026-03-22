import Loading from '@/components/common/Loading';
import NextjsFetchServerPageWithSuspense from '@/components/ex/fetch/FetchServer';
import { Suspense } from 'react';

const NextjsFetchServerPage = () => {
    return (
        <Suspense fallback={<Loading />}>
            <NextjsFetchServerPageWithSuspense />
        </Suspense>
    );
};

export default NextjsFetchServerPage;
