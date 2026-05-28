import 'server-only';

import { ProductResponse } from '@/types/api/Product';

export const getShortProductList = async (): Promise<ProductResponse> => {
    try {
        const response = await fetch(
            'https://dummyjson.com/products/category/groceries?sortBy=title&order=asc',
        );
        const data: ProductResponse = await response.json();

        return data;
    } catch (error) {
        throw new Error('Error while fetching product list');
    }
};
