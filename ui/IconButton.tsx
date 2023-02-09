import { useTheme } from '@mui/system'
import { Button, ButtonProps } from './Button'
import { Icon, IconProps } from './Icon'
import merge from 'lodash.merge'

export type IconButtonProps = ButtonProps &
  Omit<IconProps, 'width' | 'height'> & {
    iconWidth?: number
    iconHeight?: number
    children?: never
  }

export const IconButton = ({
  name,
  iconHeight,
  iconWidth,
  ...rest
}: IconButtonProps) => {
  const theme = useTheme()
  return (
    <Button
      py={2.5}
      lineHeight={0}
      borderRadius="50%"
      sx={merge(
        {
          '&:hover': {
            '& svg': {
              stroke: theme.palette.primary.dark
            }
          }
        },
        rest.sx ?? {}
      )}
      {...rest}
    >
      <Icon name={name} width={iconWidth} height={iconHeight} />
    </Button>
  )
}
