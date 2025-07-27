import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';

// Context provider type
type StandardContextProviderProps = PropsWithChildren;

// Context type
interface StandardContextData {
    counter01: number;
    counter02: number;
    setCounter01: Dispatch<SetStateAction<number>>;
    setCounter02: Dispatch<SetStateAction<number>>;
}

// The context created with React.createContext
export const StandardContext = createContext<StandardContextData>({} as StandardContextData);

// Context provider
const StandardContextProvider = ({ children }: StandardContextProviderProps) => {
    const [counter01, setCounter01] = useState(0);
    const [counter02, setCounter02] = useState(0);

    return (
        <StandardContext value={{ counter01, counter02, setCounter01, setCounter02 }}>
            {children}
        </StandardContext>
    );
};

export default StandardContextProvider;
