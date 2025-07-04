import { HTMLAttributes } from 'react';

export type PropClassName = Pick<HTMLAttributes<HTMLElement>, 'className'>;

export type MessageType = 'success' | 'error' | 'warning' | 'info';
