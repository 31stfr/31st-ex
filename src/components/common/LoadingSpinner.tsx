import { PropClassName } from '@/types/typesGlobal';
import { FaRadiation } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

export interface LoadingSpinnerProps extends PropClassName {
    flavor?: keyof typeof flavorCss;
}

const flavorCss = {
    lime: 'bg-lime-400 border-lime-300 outline-lime-200',
    orange: 'bg-orange-400 border-orange-300 outline-orange-200',
    rose: 'bg-rose-400 border-rose-300 outline-rose-200',
    sky: 'bg-sky-400 border-sky-300 outline-sky-200',
} as const;

const LoadingSpinner = ({ flavor = 'rose', className = undefined }: LoadingSpinnerProps) => {
    return (
        <div
            className={twMerge(
                'flex items-center justify-center w-8 aspect-square text-lg text-white rounded-full border-4 outline-4',
                flavorCss[flavor],
                className
            )}
        >
            <FaRadiation className="animate-spin" />
        </div>
    );
};

export default LoadingSpinner;
