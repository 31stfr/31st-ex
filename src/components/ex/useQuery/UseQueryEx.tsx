import Loading from '@/components/common/Loading';
import UserDisplay from '@/components/ressource/user/UserDisplay';
import { Button, buttonVariants } from '@/components/ui/button';
import { User } from '@/types/api/User';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps, PropsWithChildren, createContext, use } from 'react';
import { FaRotate, FaXmark } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

type UseQueryExProviderProps = PropsWithChildren;

type UseQueryExData = {};

// Liskov Substitution principle ( Subtype objects should be substitutable for supertype objects )
type UseQueryExRefetchProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>;
type UseQueryExDataWrapperProps = PropsWithChildren;
type UseQueryExDataProps = {
    data: User[];
    isError: boolean;
    isFetching: boolean;
};

const UseQueryExContext = createContext<UseQueryExData>({} as UseQueryExData);

// Hook
export const useUseQueryEx = () => {
    const context = use(UseQueryExContext);
    if (!context) {
        throw new Error("UseQueryEx component's must be wrapped in a UseQueryExProvider");
    }

    return context;
};

const UseQueryEx = ({ children }: UseQueryExProviderProps) => {
    return (
        <UseQueryExContext value={{}}>
            <div className="w-full grid grid-cols-[auto_1fr] items-center gap-4 border border-neutral-200 p-4 rounded-md">
                {children}
            </div>
        </UseQueryExContext>
    );
};

const UseQueryExRefetch = (props: UseQueryExRefetchProps) => {
    useUseQueryEx();

    return (
        <Button variant="rose" className={twMerge('w-fit', props?.className)} {...props}>
            <FaRotate /> Refetch
        </Button>
    );
};

const UseQueryExDataWrapper = ({ children }: UseQueryExDataWrapperProps) => {
    useUseQueryEx();

    return <div className="min-h-20 flex items-center divide-x overflow-x-auto">{children}</div>;
};

const UseQueryExData = ({ data, isError, isFetching }: UseQueryExDataProps) => {
    useUseQueryEx();

    if (isFetching) {
        return <Loading />;
    }

    if (isError) {
        return (
            <div className="flex items-center gap-1 text-rose-400">
                <FaXmark />
                Error fetching data
            </div>
        );
    }

    return data.map((user) => {
        const key = `user-${user.id}`;

        return (
            <UserDisplay key={key} user={user} className="px-4">
                <UserDisplay.UserName className="text-base" />
                <UserDisplay.Name className="text-xs" />
                <UserDisplay.Email className="text-xs" />
            </UserDisplay>
        );
    });
};

UseQueryEx.Refetch = UseQueryExRefetch;
UseQueryEx.DataWrapper = UseQueryExDataWrapper;
UseQueryEx.Data = UseQueryExData;

export default UseQueryEx;
