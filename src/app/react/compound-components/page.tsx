import { H4 } from '@/components/common/Heading';
import CompoundComponentsExample from '@/components/ex/compound-components/CompoundComponentsExample';
import { FaReact } from 'react-icons/fa6';

const ReactCompoundComponentsPage = () => {
    return (
        <div className="flex-1 grid grid-rows-[auto_auto_1fr] gap-8 overflow-y-hidden">
            <H4>
                <FaReact />
                Compound components
            </H4>
            <div>How to build scalable and reusable React custom components.</div>
            <CompoundComponentsExample className="overflow-y-auto" />
        </div>
    );
};

export default ReactCompoundComponentsPage;
