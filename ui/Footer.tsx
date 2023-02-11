import { Box } from '@mui/system'
import { Children } from 'react'

import { Divider, HeaderProps } from '~ui'

export type FooterProps = HeaderProps

export const Footer = ({
  startAdorsement,
  endAdorsement,
  children,
  ...rest
}: FooterProps) => (
  <Box
    component="header"
    display="flex"
    flexDirection="column"
    width="100%"
    alignItems="center"
    {...rest}
  >
    <Divider />
    <Box
      py={{ xs: 1.875, md: 3.75 }}
      display="flex"
      alignItems="center"
      width="100%"
    >
      {startAdorsement}
      <Box
        display="flex"
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
      >
        {Children.map(children, (child) => (
          <Box px={4.5}>{child}</Box>
        ))}
      </Box>
      {endAdorsement}
    </Box>
  </Box>
)
