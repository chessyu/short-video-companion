
import NavigationLink from '@/app/components/NavigationLink'
import React from 'react'
import Layout from '@/app/components/Layout'

function OfficialLayout({ children }: { children: React.ReactNode }) {

    return (
        <Layout>
            {/* <nav>
                <NavigationLink href="/"> home </NavigationLink>
                <NavigationLink href="/price">price</NavigationLink>
            </nav> */}
            {children}
        </Layout>
    )
}

export default OfficialLayout