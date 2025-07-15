'use client';

import LoadingSpinner from '@/components/common/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { highlightSearchResults } from '@/lib/utils';
import { Todo } from '@/types/api/Todo';
import React, { useEffect, useState, useTransition } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

interface TodoListRenderProps {
    todoList: Todo[];
}

// Search string cleaner
const getCleanedQuery = (query: string) => {
    return query.replace(/\s+/g, ' ').trim();
};

const TodoListRender = ({ todoList }: TodoListRenderProps) => {
    const [isPending, startTransition] = useTransition();
    const [todoListFiltered, setTodoListFiltered] = useState<Todo[]>(todoList);
    const [inputValue, setInputValue] = useState('');
    const [inputFocus, setInputFocus] = useState(false);

    // Transition's action ( should be named action or include the “Action” suffix )
    // https://react.dev/reference/react/useTransition#functions-called-in-starttransition-are-called-actions
    const filterTodoListAction = async (query: string) => {
        // Simulate filtering process delay...
        await new Promise((resolve) => setTimeout(resolve, 500));

        const queryCleaned = getCleanedQuery(query);
        // No query, restore original list
        if (!queryCleaned) {
            return setTodoListFiltered(todoList);
        }

        // List filtering
        const todoListFiltered = todoList.filter((todo) => {
            return todo.title.toLowerCase().includes(query.trim().toLowerCase());
        });

        setTodoListFiltered(todoListFiltered);
    };

    // Seach input change handler
    const onChangeHandler = (query: string) => {
        startTransition(async () => {
            await filterTodoListAction(query);
        });
    };

    // Search input reset handler
    const onClickHandler = () => {
        setInputValue('');
        onChangeHandler('');
    };

    // Results message generator
    const getResultsMessage = (query: string) => {
        if (isPending) {
            return 'Searching...';
        }

        const queryCleaned = getCleanedQuery(query);
        if (!queryCleaned) {
            return 'All todos displayed';
        }

        if (todoListFiltered.length) {
            return `${todoListFiltered.length}/${todoList.length} results`;
        }

        return 'No results';
    };

    return (
        <div className="flex-1 flex flex-col items-center gap-4">
            <div className="flex">
                <Input
                    className="lg:w-96 rounded-r-none"
                    placeholder="Search for a todo..."
                    value={inputValue}
                    onChange={(e) => onChangeHandler(e.currentTarget.value)}
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                    onInput={(e) => setInputValue(e.currentTarget.value)}
                />
                <Button
                    className={twMerge(
                        'rounded-none border-y border-input',
                        inputFocus && 'border-orange-300 bg-orange-50'
                    )}
                    variant="secondary"
                    onClick={() => onClickHandler()}
                >
                    <FaXmark />
                </Button>
                <div
                    className={twMerge(
                        'flex items-center justify-center rounded-r-md bg-neutral-100 h-full w-12',
                        'border border-input',
                        'shadow-xs',
                        inputFocus && 'border-orange-300 bg-orange-50'
                    )}
                >
                    {isPending && <LoadingSpinner className="w-4 text-xs border-0 outline-0" />}
                </div>
            </div>
            <div className="text-xs text-neutral-400">{getResultsMessage(inputValue)}</div>
            <div className="grid grid-cols-[auto_1fr] gap-1 min-w-[40%] items-center">
                {todoListFiltered.map((todo, index) => {
                    const key = `todo-${todo.id}`;

                    // Highlight search results
                    const title = highlightSearchResults(todo.title, inputValue);

                    return (
                        <React.Fragment key={key}>
                            <span className="font-mono text-neutral-400">
                                {String(index + 1).padStart(3, '0')}.
                            </span>
                            <span>{title}</span>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default TodoListRender;
