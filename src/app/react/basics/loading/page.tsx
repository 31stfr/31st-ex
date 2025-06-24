import { H4 } from '@/components/common/Heading';
import Loading from '@/components/common/Loading';
import LoadingSpinner from '@/components/common/LoadingSpinner';

const ReactBasicsLoadingPage = () => {
    return (
        <div className="flex-1 flex flex-col items-stretch gap-4">
            <H4>Reusable loading component</H4>
            <p className="text-secondary-foreground">A really simple reusable loading component</p>
            <div className="flex-1 grid grid-cols-4 place-items-stretch gap-8">
                <Loading
                    className="p-16 outline-4 outline-white/50 rounded-xl shadow-lg"
                    flavor="rose"
                />
                <Loading
                    className="p-16 outline-4 outline-white/50 rounded-xl shadow-lg"
                    flavor="orange"
                />
                <Loading
                    className="p-16 outline-4 outline-white/50 rounded-xl shadow-lg"
                    flavor="lime"
                />
                <Loading
                    className="p-16 outline-4 outline-white/50 rounded-xl shadow-lg"
                    flavor="sky"
                />
            </div>
        </div>
    );
};

export default ReactBasicsLoadingPage;
