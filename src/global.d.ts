declare module 'react-copy-to-clipboard'

type MenuLabel = 'Share'

type MenuItem = {
  label: MenuLabel
  icon: React.ReactNode
  onClick: (item: MenuItem) => void
}
