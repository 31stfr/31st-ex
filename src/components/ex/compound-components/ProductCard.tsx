'use client';

import { H6 } from '@/components/common/Heading';
import { ApiProduct } from '@/types/api/Product';
import { PropClassName } from '@/types/typesGlobal';
import Image from 'next/image';
import { PropsWithChildren, createContext, use } from 'react';
import { twMerge } from 'tailwind-merge';

type ProductCardProps = { product: ApiProduct } & PropsWithChildren & PropClassName;

type ProductCardData = { product: ApiProduct };

const ProductCardContext = createContext<ProductCardData | undefined>(undefined);

const ProductCard = ({ children, className, product }: ProductCardProps) => {
    return (
        <ProductCardContext value={{ product }}>
            <div
                className={twMerge(
                    'p-4 bg-neutral-50 rounded-xl border border-neutral-200 font-normal',
                    className,
                )}
            >
                {children}
            </div>
        </ProductCardContext>
    );
};

const ProductCardTitle = ({ className }: PropClassName) => {
    const { product } = useProductCard();

    return <H6 className={className}>{product.title}</H6>;
};

const ProductCardThumb = ({ className }: PropClassName) => {
    const { product } = useProductCard();

    return (
        <div className={twMerge('relative size-32', className)}>
            <Image fill src={product.thumbnail} alt={product.title} priority={true} />
        </div>
    );
};

const ProductPrice = ({ className }: PropClassName) => {
    const { product } = useProductCard();

    return <div className={twMerge('font-code', className)}>{product.price}€</div>;
};

const ProductDescription = ({ className }: PropClassName) => {
    const { product } = useProductCard();

    return (
        <div className={twMerge('text-neutral-500 text-xs', className)}>{product.description}</div>
    );
};

// Hook
const useProductCard = () => {
    const context = use(ProductCardContext);
    if (!context) {
        throw new Error("ProductCard component's must be wrapped in a ProductCard");
    }

    return context;
};

ProductCard.Title = ProductCardTitle;
ProductCard.Thumb = ProductCardThumb;
ProductCard.Price = ProductPrice;
ProductCard.Description = ProductDescription;

export default ProductCard;
