'use server';

import { Todo } from '@/types/api/Todo';

export const getTodoList = async (): Promise<Todo[]> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();

        const dataSorted: Todo[] = data.sort((a: Todo, b: Todo) => a.title.localeCompare(b.title));

        return dataSorted;
    } catch (error) {
        throw new Error('Error while fetching todo list');
    }
};
