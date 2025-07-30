import { H4 } from '@/components/common/Heading';
import EfficientContextExample from '@/components/ex/efficient-context/EfficientContextExample';
import Link from 'next/link';
import { FaReact } from 'react-icons/fa6';

const ReactEfficientContextPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-8">
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
            <EfficientContextExample />
        </div>
    );
};

export default ReactEfficientContextPage;
