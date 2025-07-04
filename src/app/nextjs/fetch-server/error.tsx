'use client';

import ResultMessage from '@/components/common/ResultMessage';

export default function Error({ error, _reset }: { error: Error; _reset: () => void }) {
    return <ResultMessage type={'error'} content={error.message} className="justify-center" />;
}
