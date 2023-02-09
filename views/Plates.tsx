import { Box, BoxProps } from '@mui/system'
import { Paper, PaperProps, Icon, IconProps, Text } from '@ui'
import merge from 'lodash.merge'

const Plate = ({
  down,
  ...rest
}: { down?: boolean } & Omit<IconProps, 'name'>) => (
  <Icon
    name="plate"
    height={199}
    width={642}
    {...rest}
    sx={merge(
      { transform: down ? 'rotate(180deg)' : 'rotate(0deg)' },
      rest.sx ?? {}
    )}
  />
)

const PlateWithText = ({
  down,
  component,
  children,
  ...rest
}: BoxProps & { down?: boolean }) => (
  <Box
    display="flex"
    flexDirection={down ? 'column-reverse' : 'column'}
    alignItems="center"
    width="min-content"
    {...(down
      ? {
          mt: '-110px'
        }
      : {
          mb: '-110px'
        })}
    {...rest}
  >
    <Text maxWidth={400} variant="big" textAlign="center" component={component}>
      {children}
    </Text>
    <Plate down={down} />
  </Box>
)

export type PlatesProps = PaperProps
export const Plates = (props: PlatesProps) => (
  <Paper
    p={13.875}
    sx={{
      background:
        'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.31) 100%)'
    }}
    {...props}
  >
    <PlateWithText component="h1">
      Creating tools for community-oriented startups to accelerate growth.
    </PlateWithText>
    <PlateWithText down ml="auto">
      A safe, fair, and transparent place for Web3 enthusiasts to stick around
    </PlateWithText>
  </Paper>
)
