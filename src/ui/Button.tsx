import { Box, BoxProps } from '@mui/system'
import merge from 'lodash.merge'

export type ButtonProps = BoxProps

export const Button = (rest: ButtonProps) => {
  return (
    <Box
      component="button"
      borderRadius={40}
      borderColor="primary.main"
      color="primary.main"
      backgroundColor="transparent"
      fontSize={16}
      fontWeight={500}
      fontFamily="Inter Tight"
      lineHeight="22.4px"
      py={1.25}
      px={2.5}
      {...rest}
      sx={merge(
        {
          borderStyle: 'solid',
          transition: 'all 0.1s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'primary.main',
            color: 'primary.dark',
            borderColor: 'primary.dark'
          }
        },
        rest.sx ?? {}
      )}
    />
  )
}
