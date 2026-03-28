'use client';

import ResultMessage from '@/components/common/ResultMessage';
import { Todo } from '@/types/api/Todo';
import { PropClassName } from '@/types/typesGlobal';
import { use } from 'react';
import TodoListRender from './TodoListRender';

type TodoListProps = {
    getTodoListPromise: Promise<Todo[] | string>;
} & PropClassName;

const TodoList = ({ className, getTodoListPromise }: TodoListProps) => {
    const result = use(getTodoListPromise);

    // Error handling
    if ('string' === typeof result) {
        return <ResultMessage type={'error'} content={result} className="justify-center" />;
    }

    return <TodoListRender todoList={result} className={className} />;
};

export default TodoList;
