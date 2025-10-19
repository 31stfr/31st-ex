import { useQuery } from '@tanstack/react-query';
import UseQueryEx from './UseQueryEx';
import { User } from '@/types/api/User';

const UseQueryBasic = () => {
    const {
        data = [],
        isFetching,
        isError,
        refetch,
    } = useQuery<User[]>({
        queryKey: ['users', 'basic'],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            return response.json();
        },
    });

    return (
        <UseQueryEx>
            <UseQueryEx.Refetch onClick={() => refetch()} />
            <UseQueryEx.DataWrapper>
                <UseQueryEx.Data data={data} isError={isError} isFetching={isFetching} />
            </UseQueryEx.DataWrapper>
        </UseQueryEx>
    );
};

export default UseQueryBasic;
