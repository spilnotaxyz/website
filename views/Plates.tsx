import { Box, BoxProps } from '@mui/system'
import { Paper, PaperProps, Icon, IconProps, Text } from '@ui'
import merge from 'lodash.merge'

const Plate = ({
  down,
  ...rest
}: { down?: boolean } & Omit<IconProps, 'name'>) => {
  return (
    <>
      {[
        {
          xs: 'none',
          md: 'block',
          xl: 'none',
          height: 105,
          width: 339,
          name: 'plate' as const
        },
        {
          xs: 'none',
          xl: 'block',
          height: 199,
          width: 642,
          name: 'plate' as const
        },
        {
          xs: 'block',
          md: 'none',
          height: 90,
          width: 200,
          name: 'plateXs' as const
        }
      ].map(({ height, width, name, ...display }, i) => (
        <Icon
          key={i}
          name={name}
          display={display}
          height={height}
          width={width}
          {...rest}
          sx={merge(
            { transform: down ? 'rotate(180deg)' : 'rotate(0deg)' },
            rest.sx ?? {}
          )}
        />
      ))}
    </>
  )
}

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
    maxWidth={1340}
    p={{ xs: 2.5, md: 8.5, xl: 13.875 }}
    display="flex"
    justifyContent="center"
    sx={{
      background:
        'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.31) 100%)'
    }}
    {...props}
  >
    <PlateWithText
      component="h1"
      mb={{ xs: '148px', md: '134px', xl: '150px' }}
      mr={{ xs: '-40px', md: '-40px', xl: '-80px' }}
    >
      Creating tools for community-oriented startups to accelerate growth.
    </PlateWithText>
    <PlateWithText
      down
      mt={{ xs: '148px', md: '134px', xl: '150px' }}
      ml={{ xs: '-40px', md: '-40px', xl: '-80px' }}
    >
      A safe, fair, and transparent place for Web3 enthusiasts to stick around
    </PlateWithText>
  </Paper>
)
