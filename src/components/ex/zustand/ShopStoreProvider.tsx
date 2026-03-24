'use client';

import { createShopStore } from '@/hooks/store/useShopStore';
// https://zustand.docs.pmnd.rs/learn/guides/nextjs

import { createContext, PropsWithChildren, useContext, useState } from 'react';

type ShopStoreProviderProviderProps = PropsWithChildren;

type ShopStoreProviderData = ReturnType<typeof createShopStore>;

export const ShopStoreContext = createContext<ShopStoreProviderData | undefined>(undefined);

const ShopStoreProviderProvider = ({ children }: ShopStoreProviderProviderProps) => {
    const [store] = useState(() => createShopStore());

    return <ShopStoreContext.Provider value={store}>{children}</ShopStoreContext.Provider>;
};

// Hook
export const useShopStoreProvider = () => useContext(ShopStoreContext);

export default ShopStoreProviderProvider;
