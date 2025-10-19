import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import type { User } from '@/types/api/User';

// Reusable generic type
type UseQueryHooksOptions<DATA_TYPE> = Omit<
    UseQueryOptions<DATA_TYPE, Error>,
    'queryKey' | 'queryFn'
>;

const useQueryUsersBasic = (options?: UseQueryHooksOptions<User[]>) => {
    return useQuery({
        queryKey: ['users', 'basic', 'custom-hook'],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            return response.json();
        },
        ...options,
    });
};

export default useQueryUsersBasic;
