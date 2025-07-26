'use client';

import EfficientContextProvider from '@/app/components/context/EfficientContext';
import StandardContextProvider from '@/app/components/context/StandardContext';
import { H5 } from '@/components/common/Heading';
import EfficientContextConsumer01 from './EfficientContextConsumer01';
import EfficientContextConsumer02 from './EfficientContextConsumer02';
import StandardContextConsumer01 from './StandardContextConsumer01';
import StandardContextConsumer02 from './StandardContextConsumer02';

const EfficientContextExampleWithContext = () => {
    return (
        <>
            <div className="relative flex flex-col justify-stretch items-stretch p-4 md:p-8 border-4 border-dashed border-orange-300">
                <div className="md:absolute p-2 px-4 -left-1 -top-1 text-sm text-white rounded-br-lg bg-orange-300">
                    Context created with React.createContext
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-2 justify-center text-right">
                        <H5 className="justify-end">Standard context consuming</H5>
                        <p className="text-neutral-500">
                            Each time that context's value changes, each component who consumes it (
                            or only a part of it ) will re-render
                        </p>
                    </div>
                    <StandardContextConsumer01 />
                    <StandardContextConsumer02 />
                </div>
            </div>
            <div className="relative flex flex-col justify-center items-center p-4 md:p-8 border-4 border-dashed border-rose-300">
                <div className="md:absolute p-2 px-4 -left-1 -top-1 text-sm text-white rounded-br-lg bg-rose-300">
                    Context created with @fluentui/react-context-selector
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-2 justify-center text-right">
                        <H5 className="justify-end">
                            Context consuming with @fluentui/react-context-selector
                        </H5>
                        <p className="text-neutral-500">
                            Components will re-render only if the part of the context's value they
                            consume has changed
                        </p>
                    </div>
                    <EfficientContextConsumer01 />
                    <EfficientContextConsumer02 />
                </div>
            </div>
        </>
    );
};

const EfficientContextExample = () => {
    return (
        <EfficientContextProvider>
            <StandardContextProvider>
                <EfficientContextExampleWithContext />
            </StandardContextProvider>
        </EfficientContextProvider>
    );
};

export default EfficientContextExample;
