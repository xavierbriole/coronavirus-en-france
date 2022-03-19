import { useState, useCallback } from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ShareIcon from '@mui/icons-material/Share'

import ReactGA from 'react-ga'

import Drawer, {
  drawerWidth,
  DrawerHeader,
} from '../Guidelines/components/Drawer'
import AppBar from '../Guidelines/components/AppBar'
import Dialog from '../Guidelines/components/Dialog'

import Menu from './Menu'
import Share from './Dialogs/Share'
import Iframe from './Iframe'

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

export default function Root() {
  const [open, setOpen] = useState<boolean>(false)
  const [dialogIdOpen, setDialogIdOpen] = useState<MenuLabel | undefined>(
    undefined,
  )

  const handleDrawerOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleDrawerClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleDialogClose = useCallback(() => {
    setDialogIdOpen(undefined)
  }, [])

  const handleMenuItemClick = useCallback((label: MenuLabel) => {
    setDialogIdOpen(label)
    ReactGA.event({
      category: 'user',
      action: 'open-modal',
      label: label,
    })
  }, [])

  const renderDialog = useCallback((dialogId?: MenuLabel) => {
    switch (dialogId) {
      case 'Share':
        return <Share />
      default:
        return null
    }
  }, [])

  return (
    <>
      <AppBar onOpen={handleDrawerOpen} open={open}>
        <Typography variant='h6' noWrap component='div'>
          Coronavirus en France
        </Typography>
      </AppBar>
      <Drawer onClose={handleDrawerClose} open={open}>
        <Menu
          items={[
            {
              label: 'Share',
              icon: <ShareIcon />,
              onClick: ({ label }) => handleMenuItemClick(label),
            },
          ]}
        />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Iframe />
      </Main>
      <Dialog
        title={dialogIdOpen}
        onClose={handleDialogClose}
        open={!!dialogIdOpen}
      >
        {renderDialog(dialogIdOpen)}
      </Dialog>
    </>
  )
}
