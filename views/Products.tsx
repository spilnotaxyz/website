import { Box, BoxProps, Unstable_Grid as Grid, useTheme } from '@mui/system'
import merge from 'lodash.merge'

import { Paper, PaperProps, Text } from '~ui'

export type ProductsProps = BoxProps

const PassedPoint = ({
  title,
  ...rest
}: {
  title: string
} & PaperProps) => {
  const theme = useTheme()
  return (
    <Paper
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderGradient={theme.palette.gradients.border}
      borderGradientWidth={1}
      {...rest}
      sx={merge(
        {
          background: theme.palette.gradients.primary,
          aspectRatio: { xs: '1 / 1', md: 'auto' }
        },
        rest.sx ?? {}
      )}
    >
      <Text variant="h3">{title}</Text>
    </Paper>
  )
}

const RoadPoint = ({
  date,
  title,
  ...rest
}: { date: string; title: string } & PaperProps) => {
  const theme = useTheme()
  return (
    <Paper
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderGradient={theme.palette.gradients.border}
      borderGradientWidth={1}
      {...rest}
      sx={merge(
        {
          aspectRatio: '1 / 1'
        },
        rest.sx ?? {}
      )}
    >
      <Box position="absolute" top="25px" left="25px">
        <Text variant="smaller">{date}</Text>
      </Box>
      <Text variant="h3">{title}</Text>
    </Paper>
  )
}

export const Products = (rest: ProductsProps) => (
  <Box {...rest}>
    <Box id="products" display="flex" justifyContent="center">
      <Text display="inline" variant="h2" component="span">
        {'['}&nbsp;
      </Text>
      <Text display="inline" variant="h2">
        Our Products
      </Text>
      <Text display="inline" variant="h2" component="span">
        &nbsp;{']'}
      </Text>
    </Box>
    <Grid
      mt={{ xs: 3.75, md: 7.5 }}
      container
      spacing={2.5}
      justifyContent="center"
    >
      <Grid order={{ lg: 1 }} xs={12} lg={6}>
        <PassedPoint
          title="Every Action Counts"
          py={[0, 0, 8.5, 0]}
          height={{ lg: '100%' }}
        />
      </Grid>
      <Grid order={{ lg: 0 }} xs={12} md={6} lg={3}>
        <RoadPoint date="May 2023" title="PoB" />
      </Grid>
      <Grid order={{ lg: 4 }} xs={12} md={6} lg={3}>
        <RoadPoint date="May 2023" title="AWN" />
      </Grid>
      <Grid order={{ sm: 6, lg: 2 }} xs={12} md={6} lg={3}>
        <RoadPoint date="Septemper 2023" title="SCP" />
      </Grid>
      <Grid order={{ sm: 6 }} xs={12} md={6} lg={3}>
        <RoadPoint date="June 2023" title="Secret Product" />
      </Grid>
    </Grid>
  </Box>
)
