import { createContext } from '@fluentui/react-context-selector';
import { Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

export type EfficientContextProviderProps = PropsWithChildren;

export type EfficientContextData = {
    counter01: number;
    counter02: number;
    setCounter01: Dispatch<SetStateAction<number>>;
    setCounter02: Dispatch<SetStateAction<number>>;
};

// @fluentui/react-context-selector createContext
export const EfficientContext = createContext<EfficientContextData>({} as EfficientContextData);

const EfficientContextProvider = ({ children }: EfficientContextProviderProps) => {
    const [counter01, setCounter01] = useState(0);
    const [counter02, setCounter02] = useState(0);

    return (
        <EfficientContext.Provider value={{ counter01, counter02, setCounter01, setCounter02 }}>
            {children}
        </EfficientContext.Provider>
    );
};

export default EfficientContextProvider;
