import { H4 } from '@/components/common/Heading';
import CompoundComponentsExample from '@/components/ex/compound-components/CompoundComponentsExample';
import { FaReact } from 'react-icons/fa6';

const ReactCompoundComponentsPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-8">
            <H4>
                <FaReact />
                Compound components
            </H4>
            <div>How to build scalable and reusable React custom components.</div>
            <CompoundComponentsExample />
        </div>
    );
};

export default ReactCompoundComponentsPage;
