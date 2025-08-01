import { EfficientContext, EfficientContextData } from '@/app/components/context/EfficientContext';
import { ContextSelector, useContextSelector } from '@fluentui/react-context-selector';

const useEfficientContext = <T>(selector: ContextSelector<EfficientContextData, T>) => {
    return useContextSelector(EfficientContext, (context) => {
        if (!context) {
            throw new Error('useEfficientContext must be wrapped in a EfficientContextProvider');
        }

        return selector(context);
    });
};

export default useEfficientContext;
