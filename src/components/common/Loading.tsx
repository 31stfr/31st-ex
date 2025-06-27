import { PropClassName } from '@/types/typesGlobal';
import { twMerge } from 'tailwind-merge';
import LoadingSpinner, { LoadingSpinnerProps } from './LoadingSpinner';

interface LoadingProps extends PropClassName, LoadingSpinnerProps {
    spinnerClassName?: PropClassName['className'];
}

const Loading = ({
    className = undefined,
    spinnerClassName = undefined,
    ...rest
}: LoadingProps) => {
    return (
        <div className={twMerge('flex-1 flex items-center justify-center', className)}>
            <LoadingSpinner {...rest} className={spinnerClassName} />
        </div>
    );
};

export default Loading;
