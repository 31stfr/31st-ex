'use client';

import { createShopStore } from '@/hooks/store/useShopStore';
import { createContext, PropsWithChildren, useState } from 'react';

type ShopStoreProviderData = ReturnType<typeof createShopStore>;

export const ShopStoreContext = createContext<ShopStoreProviderData | undefined>(undefined);

const ShopStoreProvider = ({ children }: PropsWithChildren) => {
    const [store] = useState(() => createShopStore());

    return <ShopStoreContext.Provider value={store}>{children}</ShopStoreContext.Provider>;
};

export default ShopStoreProvider;
