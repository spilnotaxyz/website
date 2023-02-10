import { Box, BoxProps, Unstable_Grid as Grid, useTheme } from '@mui/system'
import { IconButton, Paper, PaperProps, Text } from '@ui'
import merge from 'lodash.merge'

export type ProductsProps = BoxProps

const PassedPoint = ({
  description,
  title,
  link,
  ...rest
}: {
  description: string
  link: string
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
          background: theme.palette.gradients.primary
        },
        rest.sx ?? {}
      )}
    >
      <Text variant="h3">{title}</Text>
      <Text mt={1.25} variant="bigger">
        {description}
      </Text>
      <IconButton mt={3.75} link href={link} name="external" />
    </Paper>
  )
}

const RoadPoint = ({ date, title }: { date: string; title: string }) => (
  <Paper
    display="flex"
    justifyContent="center"
    alignItems="center"
    borderGradient="linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 100%)"
    borderGradientWidth={1}
    sx={{
      aspectRatio: '1 / 1'
    }}
  >
    <Box position="absolute" top="25px" left="25px">
      <Text variant="smaller">{date}</Text>
    </Box>
    <Text variant="h3">{title}</Text>
  </Paper>
)

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
    <Grid mt={[3.75, 7.5]} container spacing={2.5} justifyContent="center">
      <Grid order={{ lg: 1 }} xs={12} lg={6}>
        <PassedPoint
          title="Every Action Counts"
          description="NFTing Card"
          link="https://nfting.spilnota.xyz"
          py={[0, 0, 8.5, 0]}
          height={{ lg: '100%' }}
          sx={{
            aspectRatio: { xs: '1 / 1', md: 'auto' }
          }}
        />
      </Grid>
      <Grid order={{ lg: 0 }} xs={12} md={6} lg={3}>
        <RoadPoint date="March 2023" title="PoB" />
      </Grid>
      <Grid order={{ lg: 4 }} xs={12} md={6} lg={3}>
        <RoadPoint date="May 2023" title="RBA" />
      </Grid>
      <Grid order={{ sm: 6, lg: 2 }} xs={12} md={6} lg={3}>
        <RoadPoint date="October 2023" title="RAM" />
      </Grid>
      <Grid order={{ sm: 6 }} xs={12} md={6} lg={3}>
        <RoadPoint date="June 2023" title="SCP" />
      </Grid>
    </Grid>
  </Box>
)
