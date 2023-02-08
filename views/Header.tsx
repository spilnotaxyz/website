import {
  Button,
  Icon,
  Link,
  Header as HeaderUI,
  HeaderProps as HeaderUIProps
} from '@ui'

export type HeaderProps = Omit<HeaderUIProps, 'children'>

export const Header = (props: HeaderProps) => (
  <HeaderUI
    startAdorsement={<Icon name="logo" height={23} width={110} />}
    endAdorsement={
      <Button link href="https://twitter.com/spilnotaxyz">
        Twitter
      </Button>
    }
    {...props}
  >
    <Link href="/">Products</Link>
    <Link href="https://spilnota.notion.site/Introduction-to-Spilnota-4108c9f28b3741ebb46fc1308f3fcb87">
      About Us
    </Link>
    <Link href="https://mirror.xyz/0x0691aEEAC35D54AF90531eEEDb1F6f93Bff10B83">
      Our Blog
    </Link>
    <Link href="https://spilnota.notion.site/Jobs-e94e86131f72489bbe56cd4e0678bb12">
      Jobs
    </Link>
  </HeaderUI>
)
