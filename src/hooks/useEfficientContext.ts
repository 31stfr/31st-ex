import { EfficientContext, EfficientContextData } from '@/app/components/context/EfficientContext';
import { ContextSelector, useContextSelector } from '@fluentui/react-context-selector';

const useEfficientContext = <T>(selector: ContextSelector<EfficientContextData, T>) => {
    return useContextSelector(EfficientContext, selector);
};

export default useEfficientContext;
