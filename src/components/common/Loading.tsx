import { PropClassName } from '@/types/typesGlobal';
import { twMerge } from 'tailwind-merge';
import LoadingSpinner, { LoadingSpinnerProps } from './LoadingSpinner';

interface LoadingProps extends PropClassName, LoadingSpinnerProps {}

const Loading = ({ className = undefined, ...rest }: LoadingProps) => {
    return (
        <div className={twMerge('flex-1 flex items-center justify-center', className)}>
            <LoadingSpinner {...rest} />
        </div>
    );
};

export default Loading;
