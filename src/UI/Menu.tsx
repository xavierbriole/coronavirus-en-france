import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import packageJson from '../../package.json'

interface MenuProps {
  items: MenuItem[]
}

export default function Menu({ items }: MenuProps) {
  const handleClick = (item: MenuItem) => {
    item.onClick(item)
  }

  return (
    <>
      <List>
        {items.map((item) => (
          <ListItemButton key={item.label} onClick={() => handleClick(item)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText
            primary={
              <Link
                href='https://github.com/xavierbriole/coronavirus-en-france'
                target='_blank'
                rel='noopener'
                variant='caption'
                underline='none'
              >
                GitHub
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Link
                href='https://www.esrifrance.fr/'
                target='_blank'
                rel='noreferrer'
                variant='caption'
                underline='none'
              >
                Carte réalisée par Esri France
              </Link>
            }
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant='caption'>
                Version {packageJson.version}
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant='caption'>
                {`${new Date().getFullYear()} © Xavier B.`}
              </Typography>
            }
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant='caption'>
                Ce site utilise les cookies pour améliorer votre expérience de
                navigation.
              </Typography>
            }
          />
        </ListItem>
      </List>
    </>
  )
}
