import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './i18n/config';


export default createMiddleware({
    // A list of all locales that are supported
    locales,
    localePrefix,
    // Used when no locale matches
    defaultLocale: 'cn'
});

export const config = {
    // Match only internationalized pathnames
    matcher: [
        '/',
        '/(cn|en)/:path*',
        '/((?!_next|_vercel|.*\\..*).*)'
    ]
};