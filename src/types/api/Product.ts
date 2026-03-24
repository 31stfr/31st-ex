// ----------------------------------------------------------- Store
export type ProductEntries = Record<
    number, // Product id
    {
        price: number;
        stock: number;
    }
>;

export type CartEntries = Record<
    number, // Product id
    {
        quantity: number;
        total: number;
    }
>;

// ----------------------------------------------------------- API
export type ProductResponse = {
    products: ApiProduct[];
    total: number;
    skip: number;
    limit: number;
};

export type ApiProduct = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    sku: string;
    weight: number;
    dimensions: ApiDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: ApiReview[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: ApiMeta;
    images: string[];
    thumbnail: string;
};

type ApiDimensions = {
    width: number;
    height: number;
    depth: number;
};

type ApiReview = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
};

type ApiMeta = {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
};
