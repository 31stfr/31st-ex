'use client';

import ResultMessage from '@/components/common/ResultMessage';
import { Todo } from '@/types/api/Todo';
import { use } from 'react';
import TodoListRender from './TodoListRender';

interface TodoListProps {
    getTodoListPromise: Promise<Todo[] | string>;
}

const TodoList = ({ getTodoListPromise }: TodoListProps) => {
    const result = use(getTodoListPromise);

    // Error handling
    if ('string' === typeof result) {
        return <ResultMessage type={'error'} content={result} className="justify-center" />;
    }

    return <TodoListRender todoList={result} />;
};

export default TodoList;
