import { Geist, Geist_Mono, Google_Sans_Code } from 'next/font/google';

export const geistSans = Geist({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-geist-sans',
});

export const geistMono = Geist_Mono({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-geist-mono',
});

export const googleSansCode = Google_Sans_Code({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-google-sans-code',
});
