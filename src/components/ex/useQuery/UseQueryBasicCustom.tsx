'use client';

import useQueryUsersBasic from '@/hooks/useQuery/useQueryUserBasic';
import { User } from '@/types/api/User';
import UseQueryEx from './UseQueryEx';

type UseQueryBasicCustomContentProps = {
    data: User[];
    isError: boolean;
    isFetching: boolean;
};

const UseQueryBasicCustom = () => {
    // All useQuery return values...
    const {
        data = [],
        isFetching,
        isError,
        refetch,
    } = useQueryUsersBasic(
        // All useQuery options you need...
        {
            select: (data) => {
                return data.sort((a: User, b: User) => a.username.localeCompare(b.username));
            },
        }
    );

    return (
        <UseQueryEx>
            <UseQueryEx.Refetch onClick={() => refetch()} />
            <UseQueryEx.DataWrapper>
                <UseQueryEx.Data data={data} isError={isError} isFetching={isFetching} />
            </UseQueryEx.DataWrapper>
        </UseQueryEx>
    );
};

export default UseQueryBasicCustom;
