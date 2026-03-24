'use client';

import { H6 } from '@/components/common/Heading';
import ProductCard from '@/components/ex/compound-components/ProductCard';
import useShopStore from '@/hooks/store/useShopStore';
import { ApiProduct } from '@/types/api/Product';

type CartProps = {
    products: ApiProduct[];
};

type CartTotalProps = {
    total: number;
};

const Cart = ({ products }: CartProps) => {
    const cartEntries = useShopStore((s) => s.cartEntries);
    const total = useShopStore((s) => s.getCartTotal());

    return (
        <div className="flex flex-col gap-4">
            <H6>Your Cart</H6>
            <CartTotal total={total} />
            <div className="flex flex-col gap-4">
                {Object.entries(cartEntries).map(([productId, entry]) => {
                    const id = Number(productId);
                    const product = products.find((p) => p.id === id);
                    if (!product) {
                        return undefined;
                    }

                    const key = `product-${product.id}`;

                    return (
                        <ProductCard key={key} product={product}>
                            <ProductCard.Title />
                            <ProductCard.Thumb className="size-12" />
                            <div className="grid grid-cols-3 divide-x place-items-stretch text-sm font-mono">
                                <ProductCard.Price className="bg-white p-1 rounded-l" />
                                <div className="flex justify-end bg-white p-1 px-1.5">
                                    x{entry.quantity}
                                </div>
                                <div className="flex justify-end bg-white p-1 px-1.5 rounded-r">
                                    {entry.total.toFixed(2)}€
                                </div>
                            </div>
                        </ProductCard>
                    );
                })}
            </div>
            <CartTotal total={total} />
        </div>
    );
};

const CartTotal = ({ total }: CartTotalProps) => {
    return (
        <div className="flex justify-between gap-2">
            Total:
            <span className="font-mono">
                {total.toFixed(2)} <span>€</span>
            </span>
        </div>
    );
};

export default Cart;
