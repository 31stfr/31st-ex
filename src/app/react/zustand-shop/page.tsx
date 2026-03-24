import ShopStoreProviderProvider from '@/components/ex/zustand/ShopStoreProvider';
import ZustandShopPageContent from '@/components/ex/zustand/ZustandShopPageContent';
import { getShortProductList } from '@/lib/api/product';

const ReactZustandStorePage = async () => {
    const { products } = await getShortProductList();

    return (
        <ShopStoreProviderProvider>
            <ZustandShopPageContent products={products} />
        </ShopStoreProviderProvider>
    );
};

export default ReactZustandStorePage;
