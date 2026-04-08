import Loading from '@/components/common/Loading';
import ShopStoreProvider from '@/components/ex/zustand/ShopStoreProvider';
import ZustandShopPageContent from '@/components/ex/zustand/ZustandShopPageContent';
import { getShortProductList } from '@/lib/api/product';
import { Suspense } from 'react';

const ReactZustandStorePage = async () => {
    const { products } = await getShortProductList();

    return (
        <ShopStoreProvider>
            <Suspense fallback={<Loading />}>
                <ZustandShopPageContent products={products} />
            </Suspense>
        </ShopStoreProvider>
    );
};

export default ReactZustandStorePage;
