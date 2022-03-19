import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { drawerWidth } from './Drawer'

interface OverriddenAppBarProps extends MuiAppBarProps {
  open?: boolean
}

const StyledMuiAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<OverriddenAppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

interface AppBarProps {
  onOpen: () => void
  open: boolean
  children: React.ReactNode
}

export default function AppBar({ onOpen, open, children }: AppBarProps) {
  return (
    <StyledMuiAppBar position='fixed' open={open}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={onOpen}
          edge='start'
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        {children}
      </Toolbar>
    </StyledMuiAppBar>
  )
}
