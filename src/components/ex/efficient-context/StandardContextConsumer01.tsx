'use client';

import useStandardContext from '@/hooks/useStandardContext';
import EfficientContextConsumer from './EfficientContextConsumer';

const StandardContextConsumer01 = () => {
    const { counter01, setCounter01 } = useStandardContext();

    return (
        <EfficientContextConsumer
            consumeLabel="Counter 01"
            counter={counter01}
            flavor="orange"
            setCounter={setCounter01}
            title="Standard consumer 01"
        />
    );
};

export default StandardContextConsumer01;
