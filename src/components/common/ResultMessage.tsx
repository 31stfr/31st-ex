import { MessageType, PropClassName } from '@/types/typesGlobal';
import { ReactElement } from 'react';
import { FaCheck, FaExclamation, FaInfo, FaXmark } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

interface ResultMessageProps extends PropClassName {
    type: MessageType;
    content: ReactElement | string;
}

type TypeData = {
    icon: ReactElement;
} & PropClassName;

const getTypeData = (type: MessageType): TypeData => {
    switch (type) {
        case 'success':
            return { icon: <FaCheck />, className: 'bg-lime-400' };

        case 'error':
            return { icon: <FaXmark />, className: 'bg-rose-400' };

        case 'warning':
            return { icon: <FaExclamation />, className: 'bg-orange-300' };

        case 'info':
            return { icon: <FaInfo />, className: 'bg-sky-400' };

        default:
            const _exhaustiveCheck: never = type;
            throw new Error('Unknown type');
    }
};

const ResultMessage = ({ type, content, className = undefined }: ResultMessageProps) => {
    const { icon, className: typeClassName } = getTypeData(type);

    return (
        <div className={twMerge('flex-1 flex items-center gap-1 text-neutral-500', className)}>
            <div
                className={twMerge(
                    'w-6 h-6 flex items-center justify-center text-white text-sm rounded-full',
                    typeClassName
                )}
            >
                {icon}
            </div>
            {content}
        </div>
    );
};

export default ResultMessage;
