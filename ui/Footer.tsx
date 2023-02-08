import { Header, HeaderProps } from './Header'

export type FooterProps = HeaderProps

export const Footer = (props: FooterProps) => (
  <Header {...props} component="footer" />
)
