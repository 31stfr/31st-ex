'use client';

import useEfficientContext from '@/hooks/useEfficientContext';
import EfficientContextConsumer from './EfficientContextConsumer';

const EfficientContextConsumer01 = () => {
    const counter01 = useEfficientContext((context) => context.counter01);
    const setCounter01 = useEfficientContext((context) => context.setCounter01);

    return (
        <EfficientContextConsumer
            consumeLabel="Counter 01"
            counter={counter01}
            flavor="rose"
            setCounter={setCounter01}
            title="Efficient consumer 01"
        />
    );
};

export default EfficientContextConsumer01;
