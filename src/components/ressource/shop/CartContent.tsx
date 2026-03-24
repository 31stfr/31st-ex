'use client';

import ProductCard from '@/components/ex/compound-components/ProductCard';
import { Button } from '@/components/ui/button';
import useShopStore from '@/hooks/store/useShopStore';
import { ApiProduct } from '@/types/api/Product';
import { PropClassName } from '@/types/typesGlobal';
import { FaXmark } from 'react-icons/fa6';

type CartContentProps = {
    products: ApiProduct[];
} & PropClassName;

const CartContent = ({ products, className }: CartContentProps) => {
    const cartEntries = useShopStore((s) => s.cartEntries);
    const removeFromCart = useShopStore((s) => s.removeFromCart);

    return Object.entries(cartEntries).map(([productId, entry]) => {
        const id = Number(productId);
        const product = products.find((p) => p.id === id);
        if (!product) {
            return undefined;
        }

        const key = `product-${product.id}`;

        return (
            <ProductCard key={key} product={product} className={className}>
                <ProductCard.Title />
                <div className="grid grid-cols-3 gap-px place-items-stretch items-center text-sm font-mono">
                    <div className="flex justify-center p-1 bg-white rounded-t-md shadow">
                        <ProductCard.Thumb className="size-12" />
                    </div>
                    <div className="col-span-2 flex justify-end">
                        <Button onClick={() => removeFromCart(product.id)} variant="link">
                            <FaXmark />
                            Remove
                        </Button>
                    </div>
                    <ProductCard.Price className="bg-white p-1 rounded-bl shadow" />
                    <div className="flex justify-end bg-white p-1 px-1.5 shadow">
                        x{entry.quantity}
                    </div>
                    <div className="flex justify-end bg-white p-1 px-1.5 rounded-r shadow">
                        {entry.total.toFixed(2)}€
                    </div>
                </div>
            </ProductCard>
        );
    });
};

export default CartContent;
