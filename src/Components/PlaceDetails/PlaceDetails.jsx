import React from 'react'
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip
} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Phone from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/rating'
import DefaultPhoto from '../../Resources/restaurantPlaceholder.jpg'

import useStyles from './Styles'

const PlaceDetails = ({ place }) => {
  const classes = useStyles()
  console.log(place)
  return (
    <>
      {place?.name && (
        <Card elevation={6}>
          <CardMedia
            style={{ height: 350 }}
            image={place.photo ? place.photo.images.large.url : DefaultPhoto}
            title={place.name}
          />
          <CardContent>
            <Typography gutterBottom varint='h5'>
              {place.name}
            </Typography>
            {place.price ? (
              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Price: </Typography>
                <Typography gutterBottom variant='subtitle1'>
                  {place.price}{' '}
                </Typography>
              </Box>
            ) : null}
            <Box display='flex' justifyContent='space-between'>
              <Typography variant='subtitle1'>Rating: </Typography>
              <Typography gutterBottom variant='subtitle1'>
                {place.ranking}{' '}
              </Typography>
            </Box>
            {place?.awards?.map((award) => (
              <Box
                my={1}
                display='flex'
                justifyContent='space-between'
                alignItems='center'>
                <img src={award.images.small} alt={award.display_name} />
                <Typography variant='subtitle2' color='textSecondary'>
                  {award.display_name}
                </Typography>
              </Box>
            ))}
            {place?.cuisine?.map(({ name }) => (
              <Chip
                key={name}
                size='small'
                label={name}
                className={classes.chip}
              />
            ))}
            {place?.address && (
              <Typography
                gutterBottom
                variant='subtitle2'
                color='textSecondary'
                className={classes.subtitle}>
                <LocationOnIcon /> {place.address}
              </Typography>
            )}
            {place?.phone && (
              <Typography
                gutterBottom
                variant='subtitle2'
                color='textSecondary'
                className={classes.subtitle}>
                <Phone /> {place.phone.replace('+44', '0').replace(' ', '')}
              </Typography>
            )}
            <CardActions>
              <Button
                size='small'
                color='primary'
                onClick={() => window.open(place.web_url, '_blank')}>
                Trip Advisor
              </Button>
              {place.website && (
                <Button
                  size='small'
                  color='primary'
                  onClick={() => window.open(place.website, '_blank')}>
                  Website
                </Button>
              )}
            </CardActions>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default PlaceDetails
