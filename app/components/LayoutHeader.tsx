
import { Avatar, Badge, Box, IconButton, Stack, SvgIcon, Tooltip } from '@mui/material';
import React from 'react'
import { alpha } from '@mui/material/styles';
import { SIDE_NAV_WIDTH, TOP_NAV_HEIGHT } from '../config';
import { useMediaValue } from '../hooks/useMediaValue';
import BellIcon from '@heroicons/react/24/solid/BellIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';


function LayoutHeader() {
  const { currentMedia } = useMediaValue();

  return (
    <Box
      component="header"
      sx={{
        backdropFilter: 'blur(6px)',
        backgroundColor: theme => alpha(theme.palette.background.default, 0.8),
        position: 'sticky',
        left: {
          lg: `${SIDE_NAV_WIDTH}px`
        },
        top: 0,
        width: {
          lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
        },
        zIndex: (theme) => theme.zIndex.appBar
      }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 2
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          {!currentMedia.lg && (
            <IconButton >
              <SvgIcon fontSize="small">
                <Bars3Icon />
              </SvgIcon>
            </IconButton>
          )}
          <Tooltip title="Search">
            <IconButton>
              <SvgIcon fontSize="small">
                <MagnifyingGlassIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          <Tooltip title="Contacts">
            <IconButton>
              <SvgIcon fontSize="small">
                <UsersIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton>
              <Badge
                badgeContent={4}
                color="success"
                variant="dot"
              >
                <SvgIcon fontSize="small">
                  <BellIcon />
                </SvgIcon>
              </Badge>
            </IconButton>
          </Tooltip>
          <Avatar
            onClick={() => console.log("WWW")}
            sx={{
              cursor: 'pointer',
              height: 40,
              width: 40
            }}
            src=""
          />
        </Stack>
      </Stack>
    </Box >
  )
}

export default LayoutHeader;