'use client';

import { H4, H6 } from '@/components/common/Heading';
import UseQueryBasic from '@/components/ex/useQuery/UseQueryBasic';
import UseQueryBasicCustom from '@/components/ex/useQuery/UseQueryBasicCustom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FaReact } from 'react-icons/fa6';

const queryClient = new QueryClient();

const UseQueryPage = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex-1 flex flex-col gap-8">
                <H4>
                    <FaReact />
                    Tanstack useQuery
                </H4>
                <div>Playing with Tanstack useQuery</div>

                <div className="flex-1 flex flex-col gap-4">
                    <H6 className="text-base">Basic useQuery usage</H6>
                    <UseQueryBasic />
                    <H6 className="text-base">Basic useQuery custom hook</H6>
                    <UseQueryBasicCustom />
                    <div className="grid grid-cols-4 gap-4"></div>
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default UseQueryPage;
