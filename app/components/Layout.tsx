import { Box } from '@mui/material'
import React from 'react'
import LayoutHeader from './LayoutHeader'
import LayoutFooter from './LayoutFooter'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Box component="main"
            sx={{
                height: '100vh'
            }}
        >
            <LayoutHeader />
            {children}
            <LayoutFooter />
        </Box>
    )
}

export default Layout