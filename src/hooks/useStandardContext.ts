import { StandardContext } from '@/app/components/context/StandardContext';
import { use } from 'react';

const useStandardContext = () => {
    const contextValue = use(StandardContext);

    if (!contextValue) {
        throw new Error('useStandardContext must be used within a StandardContextProvider');
    }

    return contextValue;
};

export default useStandardContext;
