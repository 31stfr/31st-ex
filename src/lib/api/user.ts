'use server';

import { User } from '@/types/api/User';

export const getUserList = async (): Promise<User[]> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        const dataSorted: User[] = data.sort((a: User, b: User) =>
            a.username.localeCompare(b.username)
        );

        return dataSorted;
    } catch (error) {
        throw new Error('Error while fetching user list');
    }
};
