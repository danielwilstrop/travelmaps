import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'
import DefaultPhoto from '../../Resources/restaurantPlaceholder.jpg'

import useStyles from './Styles'

const Map = ({ setCoords, setBounds, coords, places, setChildClicked }) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery('(minwidth:600px')

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        margin={[20, 20, 20, 20]}
        defaultZoom={14}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={(child) => setChildClicked(child)}
        options={''}>
        {places?.map(
          (place, i) =>
            place?.name && (
              <div
                className={classes.markerContainer}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={i}>
                {isDesktop ? (
                  <LocationOnOutlinedIcon color='primary' fontSize='large' />
                ) : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography
                      gutterBottom
                      variant='subtitle2'
                      className={classes.typography}>
                      {place.name}
                    </Typography>
                    <img
                      className={classes.pointer}
                      src={
                        place.photo
                          ? place.photo.images.large.url
                          : DefaultPhoto
                      }
                      alt={place.name}
                    />
                    <Rating
                      size='small'
                      value={Number(place.rating)}
                      readOnly
                    />
                  </Paper>
                )}
              </div>
            )
        )}
      </GoogleMapReact>
    </div>
  )
}

export default Map
