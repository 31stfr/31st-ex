'use client';

import { H4, H6 } from '@/components/common/Heading';
import Cart from '@/components/ressource/shop/Cart';
import ProductList from '@/components/ressource/shop/ProductList';
import useShopStore from '@/hooks/store/useShopStore';
import { ApiProduct, ProductEntries } from '@/types/api/Product';
import { FaReact } from 'react-icons/fa6';

type ZustandShopPageContentProps = {
    products: ApiProduct[];
};

const ZustandShopPageContent = ({ products }: ZustandShopPageContentProps) => {
    const setProductEntries = useShopStore((s) => s.setProductEntries);

    const productEntries = products.reduce((entries: ProductEntries, product) => {
        entries[product.id] = {
            price: product.price,
            stock: product.stock,
        };

        return entries;
    }, {});
    setProductEntries(productEntries);

    return (
        <div className="flex-1 grid grid-rows-[auto_auto_1fr] place-items-stretch gap-8 overflow-y-hidden">
            <H4>
                <FaReact />
                Zustand shop store example
            </H4>
            <div>Playing with Zustand</div>
            <div className="h-full grid grid-cols-1 lg:grid-cols-[1fr_5fr] grid-rows-[auto_1fr] gap-4 overflow-y-hidden">
                <H6>Your Cart</H6>
                <H6>Products</H6>
                <Cart className="overflow-y-auto" products={products} />
                <ProductList className="grid-cols-5 overflow-y-auto" products={products} />
            </div>
        </div>
    );
};

export default ZustandShopPageContent;
