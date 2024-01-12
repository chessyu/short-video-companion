
import { styled } from '@mui/material'
import React from 'react'
import { SIDE_NAV_WIDTH } from '../config';

function LayoutContainer({ children }: { children: React.ReactNode }) {

    const LayoutRoot = styled("div")(({ theme }) => ({
        display: 'flex',
        flex: "1 1 auto",
        maxWidth: "100%",
        [theme.breakpoints.up('lg')]: {
            paddingLeft: SIDE_NAV_WIDTH
        }
    }))

    const LayoutContainer = styled('div')({
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        width: '100%'
    });

    return (
        <LayoutRoot>
            <LayoutContainer >
                {children}
            </LayoutContainer>
        </LayoutRoot>
    )
}

export default LayoutContainer