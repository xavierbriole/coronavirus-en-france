import { forwardRef } from 'react'
import MuiDialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />
})

interface DialogProps {
  title?: string
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Dialog({
  title,
  open,
  onClose,
  children,
}: DialogProps) {
  return (
    <MuiDialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            onClick={onClose}
            aria-label='close'
          >
            <CloseIcon />
          </IconButton>
          {title && (
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              {title}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </MuiDialog>
  )
}
