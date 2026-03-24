'use client';

import useShopStore from '@/hooks/store/useShopStore';
import { ApiProduct } from '@/types/api/Product';
import { PropClassName } from '@/types/typesGlobal';
import { FaCartShopping } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';
import CartContent from './CartContent';

type CartProps = {
    products: ApiProduct[];
} & PropClassName;

type CartTotalProps = {
    total: number;
};

const Cart = ({ className, products }: CartProps) => {
    const cartEntries = useShopStore((s) => s.cartEntries);
    const total = useShopStore((s) => s.getCartTotal());

    const cartItemsCount = Object.keys(cartEntries).length;

    return (
        <div className={twMerge('flex flex-col gap-4', className)}>
            <CartTotal total={total} />
            <div className="flex flex-col gap-4">
                {0 === cartItemsCount ? (
                    <div className="flex flex-col justify-center items-center gap-4 p-8 bg-neutral-50 text-neutral-500 border rounded-xl">
                        <FaCartShopping className="text-neutral-300 text-2xl" />
                        Cart is empty
                    </div>
                ) : (
                    <CartContent products={products} />
                )}
            </div>
            <CartTotal total={total} />
        </div>
    );
};

const CartTotal = ({ total }: CartTotalProps) => {
    return (
        <div className="flex justify-between gap-2">
            <span className="text-neutral-500">Total:</span>
            <span className="font-mono">
                {total.toFixed(2)} <span>€</span>
            </span>
        </div>
    );
};

export default Cart;
