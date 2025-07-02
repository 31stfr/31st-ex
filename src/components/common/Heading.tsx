import { PropClassName } from '@/types/typesGlobal';
import { createElement, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type HxType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends PropsWithChildren, PropClassName {
    elementType: HxType;
}

const Heading = ({ elementType, children, className = undefined }: HeadingProps) => {
    const element = createElement(
        elementType,
        { className: twMerge('flex items-center gap-2 font-mono', className) },
        children
    );

    return element;
};

export const H1 = (props: Omit<HeadingProps, 'elementType'>) => {
    const { className, ...rest } = props;
    return <Heading elementType="h1" className={twMerge('text-5xl', className)} {...rest} />;
};
export const H2 = (props: Omit<HeadingProps, 'elementType'>) => {
    const { className, ...rest } = props;
    return <Heading elementType="h2" className={twMerge('text-4xl', className)} {...rest} />;
};
export const H3 = (props: Omit<HeadingProps, 'elementType'>) => {
    const { className, ...rest } = props;
    return <Heading elementType="h3" className={twMerge('text-3xl', className)} {...rest} />;
};
export const H4 = (props: Omit<HeadingProps, 'elementType'>) => {
    const { className, ...rest } = props;
    return <Heading elementType="h4" className={twMerge('text-2xl', className)} {...rest} />;
};
export const H5 = (props: Omit<HeadingProps, 'elementType'>) => {
    const { className, ...rest } = props;
    return <Heading elementType="h5" className={twMerge('text-xl', className)} {...rest} />;
};
export const H6 = (props: Omit<HeadingProps, 'elementType'>) => {
    const { className, ...rest } = props;
    return <Heading elementType="h6" className={twMerge('text-lg', className)} {...rest} />;
};

export default Heading;
