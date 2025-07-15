import { HTMLAttributes, ReactElement } from 'react';

export type PropClassName = Pick<HTMLAttributes<HTMLElement>, 'className'>;

export type MessageType = 'success' | 'error' | 'warning' | 'info';

export type ErrorData = {
    message: string;
};

export type MatchIndexes = { start: number; end: number };

export type ReactElementString = ReactElement | string;
