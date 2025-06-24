import { ReactNode } from 'react';

export type MenuItem = {
    key: string;
    label: string;
    icon: ReactNode;
    items: { label: string; href: string }[];
};
