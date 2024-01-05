import { Box } from '@mui/material'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Box component="main"
        
        >
            {children}
        </Box>
    )
}

export default Layout