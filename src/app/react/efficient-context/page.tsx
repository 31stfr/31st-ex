import { H4 } from '@/components/common/Heading';
import EfficientContextExample from '@/components/ex/efficient-context/EfficientContextExample';
import Link from 'next/link';
import { FaReact } from 'react-icons/fa6';

const ReactEfficientContextPage = () => {
    return (
        <div className="flex-1 grid grid-rows-[auto_auto_1fr] gap-8 overflow-y-hidden">
            <H4>
                <FaReact />
                Efficient context
            </H4>
            <div>
                How to efficiently consume React context with{' '}
                <Link href="https://www.npmjs.com/package/@fluentui/react-context-selector">
                    @fluentui/react-context-selector
                </Link>
            </div>
            <div className="flex flex-col gap-8 overflow-y-auto">
                <EfficientContextExample />
            </div>
        </div>
    );
};

export default ReactEfficientContextPage;
