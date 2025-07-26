'use client';

import { H6 } from '@/components/common/Heading';
import { Button } from '@/components/ui/button';
import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

type EfficientContextConsumerProps = {
    consumeLabel: string;
    counter: number;
    flavor: 'rose' | 'orange';
    setCounter: Dispatch<SetStateAction<number>>;
    title: string;
};

const getDateDisplay = () => {
    const now = new Date();

    return now.toLocaleTimeString() + '.' + now.getMilliseconds();
};

const EfficientContextConsumer = ({
    consumeLabel,
    counter,
    flavor,
    setCounter,
    title,
}: EfficientContextConsumerProps) => {
    const dateDisplay = getDateDisplay();

    return (
        <div
            className={twMerge(
                'flex flex-col items-center gap-4 p-8 rounded-xl md:min-w-72',
                'shadow-lg border',
                'orange' === flavor
                    ? 'shadow-orange-300 border-orange-50'
                    : 'shadow-rose-300 border-rose-50',
                'outline-4 outline-white/30'
            )}
        >
            <H6>{title}</H6>
            <div className="w-full grid grid-cols-2 gap-2 text-sm text-neutral-500">
                <div className="font-semibold">Last render</div>
                <div>{dateDisplay}</div>
                <div className="font-semibold">{consumeLabel}</div>
                <div>{counter}</div>
            </div>
            <div className="flex gap-1">
                <Button onClick={() => setCounter(counter + 1)}>+</Button>
                <Button onClick={() => setCounter(counter - 1)}>-</Button>
            </div>
        </div>
    );
};

export default EfficientContextConsumer;
