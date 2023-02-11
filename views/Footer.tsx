import {
  Footer as FooterUI,
  FooterProps as FooterUIProps,
  Link,
  Text
} from '~ui'

export type FooterProps = FooterUIProps
export const Footer = (props: FooterProps) => (
  <FooterUI
    startAdorsement={<Text variant="body">spilnota.xyz © 2023</Text>}
    endAdorsement={<Link href="/privacy">Privacy Policy</Link>}
    {...props}
  />
)
