'use client';

import useEfficientContext from '@/hooks/useEfficientContext';
import EfficientContextConsumer from './EfficientContextConsumer';

const EfficientContextConsumer02 = () => {
    const counter02 = useEfficientContext((context) => context.counter02);
    const setCounter02 = useEfficientContext((context) => context.setCounter02);

    return (
        <EfficientContextConsumer
            consumeLabel="Counter 02"
            counter={counter02}
            flavor="rose"
            setCounter={setCounter02}
            title="Efficient consumer 02"
        />
    );
};

export default EfficientContextConsumer02;
