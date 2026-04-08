import { ShopStoreContext } from '@/components/ex/zustand/ShopStoreProvider';
import { CartEntries, ProductEntries } from '@/types/api/Product';
import { use } from 'react';
import { createStore, useStore } from 'zustand';

export type ShopStore = {
    cartEntries: CartEntries;
    productEntries: ProductEntries;
    // Methods
    increaseQuantity: (productId: number) => void;
    getCartTotal: () => number;
    decreaseQuantity: (productId: number) => void;
    setProductEntries: (entries: ProductEntries) => void;
    removeFromCart: (productId: number) => void;
};

const round2 = (value: number) => {
    return Math.round(value * 100) / 100;
};

// Specific NextJs: https://zustand.docs.pmnd.rs/learn/guides/nextjs
export const createShopStore = () => {
    return createStore<ShopStore>()((set, get) => {
        return {
            cartEntries: {},
            productEntries: {},

            setProductEntries: (entries) => {
                set({
                    productEntries: entries,
                });
            },

            increaseQuantity: (productId) => {
                const productEntry = get().productEntries[productId];
                if (!productEntry) {
                    return;
                }

                const cartEntry = get().cartEntries[productId];

                const qtyNext = (cartEntry?.quantity ?? 0) + 1;
                if (qtyNext > productEntry.stock) {
                    return;
                }

                set({
                    cartEntries: {
                        ...get().cartEntries,
                        [productId]: {
                            quantity: qtyNext,
                            total: round2(productEntry.price * qtyNext),
                        },
                    },
                });
            },

            decreaseQuantity: (productId) => {
                const productEntry = get().productEntries[productId];
                const cartEntry = get().cartEntries[productId];
                if (!productEntry || !cartEntry) {
                    return;
                }

                const qtyNext = cartEntry.quantity - 1;
                if (qtyNext <= 0) {
                    const cartEntriesUpdated = get().cartEntries;
                    delete cartEntriesUpdated[productId];
                    set({ cartEntries: cartEntriesUpdated });
                    return;
                }

                set({
                    cartEntries: {
                        ...get().cartEntries,
                        [productId]: {
                            quantity: qtyNext,
                            total: round2(productEntry.price * qtyNext),
                        },
                    },
                });
            },

            removeFromCart: (productId) => {
                const cartEntriesUpdated = get().cartEntries;
                delete cartEntriesUpdated[productId];

                set({ cartEntries: cartEntriesUpdated });
            },

            getCartTotal: () => {
                return Object.values(get().cartEntries).reduce((total, entry) => {
                    return round2(total + entry.total);
                }, 0);
            },
        };
    });
};

const useShopStore = <T>(selector: (store: ShopStore) => T) => {
    const context = use(ShopStoreContext);
    if (!context) {
        throw new Error('useShopStore must be wrapped in a ShopStoreProvider');
    }

    return useStore(context, selector);
};

export default useShopStore;
