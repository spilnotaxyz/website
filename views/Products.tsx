import { Box, BoxProps, Unstable_Grid as Grid } from '@mui/system'
import { IconButton, Paper, Text } from '@ui'

export type ProductsProps = BoxProps

const PassedPoint = ({
  description,
  title,
  link
}: {
  description: string
  link: string
  title: string
}) => (
  <Paper
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    px={10}
    minHeight={370}
    sx={{
      background:
        'linear-gradient(180deg, #68A1F6 0%, rgba(154, 154, 154, 0) 100%);'
    }}
    borderGradient="linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 100%)"
    borderGradientWidth={1}
  >
    <Text variant="h3">{title}</Text>
    <Text mt={1.25} variant="bigger">
      {description}
    </Text>
    <IconButton mt={3.75} link href={link} name="external" />
  </Paper>
)

const RoadPoint = ({ date, title }: { date: string; title: string }) => (
  <Paper
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight={370}
    px={10}
    borderGradient="linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 100%)"
    borderGradientWidth={1}
  >
    <Box position="absolute" top="25px" left="25px">
      <Text variant="smaller">{date}</Text>
    </Box>
    <Text variant="h3">{title}</Text>
  </Paper>
)

export const Products = (rest: ProductsProps) => (
  <Box {...rest}>
    <Box display="flex" justifyContent="center">
      <Text display="inline" variant="h2" component="span">
        {'[ '}
      </Text>
      <Text display="inline" variant="h2">
        Our Products
      </Text>
      <Text display="inline" variant="h2" component="span">
        {' ]'}
      </Text>
    </Box>
    <Grid mt={7.5} container justifyContent="center" spacing={2.5}>
      <Grid xs={3}>
        <RoadPoint date="March 2023" title="PoB" />
      </Grid>
      <Grid xs={6}>
        <PassedPoint
          title="Every Action Counts"
          description="NFTing Card"
          link="https://eve.spilnota.xyz"
        />
      </Grid>
      <Grid xs={3}>
        <RoadPoint date="September 2023" title="RAM" />
      </Grid>
      <Grid xs={3}>
        <RoadPoint date="May 2023" title="RBA" />
      </Grid>
      <Grid xs={3}>
        <RoadPoint date="June 2023" title="SCP" />
      </Grid>
    </Grid>
  </Box>
)
