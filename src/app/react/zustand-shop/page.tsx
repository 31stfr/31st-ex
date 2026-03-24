import Loading from '@/components/common/Loading';
import ShopStoreProviderProvider from '@/components/ex/zustand/ShopStoreProvider';
import ZustandShopPageContent from '@/components/ex/zustand/ZustandShopPageContent';
import { getShortProductList } from '@/lib/api/product';
import { Suspense } from 'react';

const ReactZustandStorePage = async () => {
    const { products } = await getShortProductList();

    return (
        <ShopStoreProviderProvider>
            <Suspense fallback={<Loading />}>
                <ZustandShopPageContent products={products} />
            </Suspense>
        </ShopStoreProviderProvider>
    );
};

export default ReactZustandStorePage;
