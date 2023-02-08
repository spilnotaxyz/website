import { Box, BoxProps } from '@mui/system'
import { PropsWithChildren, ReactNode, Children } from 'react'

export type HeaderProps = PropsWithChildren<{
  startAdorsement?: ReactNode
  endAdorsement?: ReactNode
}> &
  BoxProps

export const Header = ({
  startAdorsement,
  endAdorsement,
  children,
  ...rest
}: HeaderProps) => (
  <Box
    component="header"
    display="flex"
    width="100%"
    alignItems="center"
    {...rest}
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
)
