import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'

import useStyles from './Styles'

const Map = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(minwidth:600px')

  const coords = { lat: 6, lng: 54 }

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        onChange={''}
        onChildClick={''}
        options={''}></GoogleMapReact>
    </div>
  )
}

export default Map
