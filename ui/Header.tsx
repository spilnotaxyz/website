import { Box, BoxProps } from '@mui/system'
import { Divider, IconButton } from '@ui'
import { PropsWithChildren, ReactNode, Children, useState } from 'react'

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
}: HeaderProps) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <Box
      component="header"
      display="flex"
      flexDirection="column"
      width="100%"
      height={isOpened ? '100vh' : 'auto'}
      alignItems="center"
      {...rest}
    >
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        py={{ xs: 2.5, md: 3.75 }}
      >
        {startAdorsement}
        <Box
          display="flex"
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            iconHeight={9}
            iconWidth={28}
            onClick={() => setIsOpened((prevState) => !prevState)}
            display={{ xs: 'block', md: 'none' }}
            border="none"
            color="transparent"
            name={isOpened ? 'menuClose' : 'menuOpen'}
            sx={{
              transition: 'none',
              '&:hover': {
                backgroundColor: 'inherit',
                color: 'inherit',
                borderColor: 'inherit',
                border: 'none'
              }
            }}
          />
          {Children.map(children, (child) => (
            <Box display={{ xs: 'none', md: 'block' }} px={4.5}>
              {child}
            </Box>
          ))}
        </Box>
        {endAdorsement}
      </Box>
      <Divider />
      {isOpened && (
        <Box
          display="flex"
          flexDirection="column"
          justifyItems="center"
          m="auto"
        >
          {Children.map(children, (child) => (
            <Box display={{ xs: 'block', md: 'none' }} py={2.5}>
              {child}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}
