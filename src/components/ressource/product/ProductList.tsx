'use client';

import ProductCard from '@/components/ex/compound-components/ProductCard';
import { Product } from '@/types/api/Product';
import { PropClassName } from '@/types/typesGlobal';
import { twMerge } from 'tailwind-merge';

type ProductListProps = {
    products: Product[];
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
                        className="aspect-square grid grid-cols-2 gap-4"
                    >
                        <ProductCard.Title className="col-span-full" />
                        <div className="flex p-2 w-fit h-fit bg-white rounded-lg">
                            <ProductCard.Thumb className="size-18" />
                        </div>
                        <ProductCard.Price className="text-xl" />
                        <ProductCard.Description className="col-span-full" />
                        <div>stock: {product.stock}</div>
                    </ProductCard>
                );
            })}
        </div>
    );
};

export default ProductList;
