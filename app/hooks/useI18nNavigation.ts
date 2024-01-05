import { useRouter, usePathname, redirect } from '@/i18n/navigation'
import { useParams, useSearchParams } from 'next/navigation'


export function useI18nNavigation() {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const searchParams = useSearchParams()
    


    return {
        router,
        pathname,
        redirect,
        params,
        searchParams,
    }
}