import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';

type StandardContextProviderProps = PropsWithChildren;

interface StandardContextData {
    counter01: number;
    counter02: number;
    setCounter01: Dispatch<SetStateAction<number>>;
    setCounter02: Dispatch<SetStateAction<number>>;
}

// Default React.createContext
export const StandardContext = createContext<StandardContextData>({} as StandardContextData);

const StandardContextProvider = ({ children }: StandardContextProviderProps) => {
    const [counter01, setCounter01] = useState(0);
    const [counter02, setCounter02] = useState(0);

    return (
        <StandardContext.Provider value={{ counter01, counter02, setCounter01, setCounter02 }}>
            {children}
        </StandardContext.Provider>
    );
};

export default StandardContextProvider;
