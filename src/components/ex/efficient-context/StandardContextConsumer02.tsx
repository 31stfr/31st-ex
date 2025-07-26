'use client';

import useStandardContext from '@/hooks/useStandardContext';
import EfficientContextConsumer from './EfficientContextConsumer';

const StandardContextConsumer02 = () => {
    const { counter02, setCounter02 } = useStandardContext();

    return (
        <EfficientContextConsumer
            consumeLabel="Counter 02"
            counter={counter02}
            flavor="orange"
            setCounter={setCounter02}
            title="Standard consumer 02"
        />
    );
};

export default StandardContextConsumer02;
