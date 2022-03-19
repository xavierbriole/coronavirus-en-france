import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import FileCopyIcon from '@mui/icons-material/FileCopy'

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function Share() {
  const [displaySnack, setDisplaySnack] = useState<boolean>(false)

  const handleCopy = () => {
    setDisplaySnack(true)
  }

  const handleCloseSnackbar = () => {
    setDisplaySnack(false)
  }

  return (
    <Box sx={{ p: 4 }}>
      <Grid
        direction='column'
        alignContent='center'
        alignItems='center'
        container
      >
        <Grid item>
          <CopyToClipboard text={window.location} onCopy={handleCopy}>
            <Input value={window.location} disabled />
          </CopyToClipboard>
          <CopyToClipboard text={window.location} onCopy={handleCopy}>
            <IconButton>
              <FileCopyIcon />
            </IconButton>
          </CopyToClipboard>
          <Snackbar
            open={displaySnack}
            onClose={handleCloseSnackbar}
            message='Copié dans le presse-papier !'
            autoHideDuration={2000}
          />
        </Grid>
        <Grid item>
          <IconButton>
            <EmailShareButton
              url={`${window.location}`}
              subject='Coronavirus en France - Carte en temps réel'
              body='Coronavirus: évolution de la situation en direct en France et dans les DOM-TOM'
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </IconButton>
          <IconButton>
            <FacebookShareButton url={`${window.location}`}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </IconButton>
          <IconButton>
            <LinkedinShareButton url={`${window.location}`}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </IconButton>
          <IconButton>
            <TwitterShareButton url={`${window.location}`}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </IconButton>
          <IconButton>
            <WhatsappShareButton url={`${window.location}`}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  )
}
