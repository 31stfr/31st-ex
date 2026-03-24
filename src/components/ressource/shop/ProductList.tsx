'use client';

import ProductCard from '@/components/ex/compound-components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useShopStore from '@/hooks/store/useShopStore';
import { ApiProduct } from '@/types/api/Product';
import { PropClassName } from '@/types/typesGlobal';
import { twMerge } from 'tailwind-merge';

type ProductListProps = {
    products: ApiProduct[];
} & PropClassName;

type QuantityInputProps = {
    product: ApiProduct;
} & PropClassName;

type StockProps = {
    productId: number;
} & PropClassName;

const ProductList = ({ className, products }: ProductListProps) => {
    return (
        <div className={twMerge('grid gap-4', className)}>
            {products.map((product) => {
                const key = `product-${product.id}`;

                return (
                    <ProductCard
                        key={key}
                        product={product}
                        className="aspect-square grid grid-cols-[auto_1fr] grid-rows-[auto_auto_1fr] place-items-stretch gap-4"
                    >
                        <ProductCard.Title className="col-span-full" />
                        <div className="flex p-2 w-fit h-fit bg-white rounded-lg border">
                            <ProductCard.Thumb className="size-22" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <ProductCard.Price className="text-lg leading-none" />
                            <Stock className="text-xs" productId={product.id} />
                            <QuantityInput product={product} />
                        </div>
                        <ProductCard.Description className="col-span-full" />
                    </ProductCard>
                );
            })}
        </div>
    );
};

const Stock = ({ className, productId }: StockProps) => {
    const cartEntry = useShopStore((s) => s.cartEntries[productId]);
    const productEntry = useShopStore((s) => s.productEntries[productId]);

    const stock = (productEntry?.stock ?? 0) - (cartEntry?.quantity ?? 0);

    return (
        <div className={twMerge('flex justify-between', className)}>
            In stock: <span className="font-mono">{stock}</span>
        </div>
    );
};

const QuantityInput = ({ className, product }: QuantityInputProps) => {
    const increaseQuantity = useShopStore((s) => s.increaseQuantity);
    const decreaseQuantity = useShopStore((s) => s.decreaseQuantity);
    const productEntry = useShopStore((s) => s.cartEntries[product.id]);

    return (
        <div className={twMerge('h-fit grid grid-cols-2 grid-rows-[1fr_auto] gap-px', className)}>
            <Input
                type="number"
                min={0}
                max={product.stock}
                className={twMerge(
                    'input-number-wo-arrows border-b-0 rounded-b-none col-span-2 bg-white',
                )}
                value={productEntry?.quantity || 0}
                disabled
            />
            <Button
                className={twMerge(
                    'rounded-t-none rounded-r-none border-y border-input',
                    'px-0 py-0! h-6',
                )}
                variant="orange"
                onClick={() => increaseQuantity(product.id)}
            >
                +
            </Button>
            <Button
                className={twMerge(
                    'rounded-t-none rounded-l-none border-y border-input',
                    'px-0 py-0! h-6',
                )}
                variant="orange"
                onClick={() => decreaseQuantity(product.id)}
            >
                -
            </Button>
        </div>
    );
};

export default ProductList;
