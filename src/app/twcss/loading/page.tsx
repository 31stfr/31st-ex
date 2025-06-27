import { H4 } from '@/components/common/Heading';
import Loading from '@/components/common/Loading';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { SiTailwindcss } from 'react-icons/si';

const TwcssLoadingPage = () => {
    return (
        <div className="flex-1 flex flex-col items-stretch gap-4">
            <H4>
                <SiTailwindcss />
                React and Tailwind CSS simple progress indicator
            </H4>
            <p className="text-secondary-foreground">
                A really simple reusable "loading" component
            </p>
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 grid-rows-[auto_1fr_auto_1fr_auto_1fr] place-items-stretch gap-4 font-mono">
                <div className="col-span-full p-4 text-sm bg-neutral-50 rounded-xl">
                    Tiny, for inline usage
                </div>
                <div className="flex items-center justify-center gap-1">
                    <span className="text-neutral-500">rose</span>
                    <LoadingSpinner className="w-4 text-xs border-0 outline-0" flavor="rose" />
                </div>
                <div className="flex items-center justify-center gap-1">
                    <span className="text-neutral-500">orange</span>
                    <LoadingSpinner className="w-4 text-xs border-0 outline-0" flavor="orange" />
                </div>
                <div className="flex items-center justify-center gap-1">
                    <span className="text-neutral-500">lime</span>
                    <LoadingSpinner className="w-4 text-xs border-0 outline-0" flavor="lime" />
                </div>
                <div className="flex items-center justify-center gap-1">
                    <span className="text-neutral-500">sky</span>
                    <LoadingSpinner className="w-4 text-xs border-0 outline-0" flavor="sky" />
                </div>
                <div className="col-span-full p-4 text-sm bg-neutral-50 rounded-xl">
                    Default, centered
                </div>
                <Loading flavor="rose" />
                <Loading flavor="orange" />
                <Loading flavor="lime" />
                <Loading flavor="sky" />
                <div className="col-span-full p-4 text-sm bg-neutral-50 rounded-xl">
                    Bigger, centered
                </div>
                <Loading spinnerClassName="w-20 text-6xl" flavor="rose" />
                <Loading spinnerClassName="w-20 text-6xl" flavor="orange" />
                <Loading spinnerClassName="w-20 text-6xl" flavor="lime" />
                <Loading spinnerClassName="w-20 text-6xl" flavor="sky" />
            </div>
        </div>
    );
};

export default TwcssLoadingPage;
