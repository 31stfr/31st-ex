'use server';

import { Todo } from '@/types/api/Todo';

export const getTodoList = async (): Promise<Todo[]> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error('Error while fetching todo list');
    }
};
