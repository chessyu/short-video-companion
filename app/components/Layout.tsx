'use client'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import LayoutHeader from './LayoutHeader'
import LayoutContainer from './LayoutContainer'
import LayoutSideNav from './LayoutSideNav'


function Layout({ children }: { children: React.ReactNode }) {
    const [ open , setOpen] = useState(true)

    return (
        <Box component="main"
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: "column",
            }}
        >
            <LayoutHeader />
            <LayoutSideNav
                onClose={() => { setOpen(false) }}
                open={open}
            />
            <LayoutContainer>
                {children}
            </LayoutContainer>
        </Box>
    )
}

export default Layout