import { H4 } from '@/components/common/Heading';
import ProductCard from '@/components/ex/compound-components/ProductCard';
import ProductList from '@/components/ressource/product/ProductList';
import { getShortProductList } from '@/lib/api/product';
import { FaReact } from 'react-icons/fa6';

const ReactZustandStorePage = async () => {
    const { products } = await getShortProductList();

    console.log(products);

    return (
        <div className="flex-1 grid grid-rows-[auto_auto_1fr] place-items-stretch gap-8 overflow-y-hidden">
            <H4>
                <FaReact />
                Zustand shop store example
            </H4>
            <div>Playing with Zustand</div>
            <ProductList className="grid-cols-6" products={products} />
        </div>
    );
};

export default ReactZustandStorePage;
