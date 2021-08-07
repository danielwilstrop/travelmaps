import React, { useState } from 'react'
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  FormControl
} from '@material-ui/core'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './Styles'

const List = () => {
  const classes = useStyles()
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('0')

  const places = [
    { name: 'pub1' },
    { name: 'hotel' },
    { name: 'cool place' },
    { name: 'pub1' },
    { name: 'hotel' },
    { name: 'cool place' },
    { name: 'pub1' },
    { name: 'hotel' },
    { name: 'cool place' },
    { name: 'pub1' },
    { name: 'hotel' },
    { name: 'cool place' },
    { name: 'pub1' },
    { name: 'hotel' },
    { name: 'cool place' },
    { name: 'pub1' },
    { name: 'hotel' },
    { name: 'cool place' },
    { name: 'pub1' },
    { name: 'hotel' },
    { name: 'cool place' },
    { name: 'pub1' },
    { name: 'hotel' },
    { name: 'cool place' },
    { name: 'pub1' },
    { name: 'hotel' },
    { name: 'cool place' }
  ]

  return (
    <div className={classes.container}>
      <Typography variant='h4'>Hotels, Attractions and Restaurants</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id='type'>Type</InputLabel>
        <Select
          id='type'
          value={type}
          onChange={(e) => setType(e.target.value)}>
          <MenuItem value='restaurants'>Restaurants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id='rating'>Rating</InputLabel>
        <Select
          id='rating'
          value={rating}
          onChange={(e) => setRating(e.target.value)}>
          <MenuItem value='0'>All</MenuItem>
          <MenuItem value='3'>Above 3 Stars</MenuItem>
          <MenuItem value='4'>Above 4 Stars</MenuItem>
          <MenuItem value='4.5'>Above 4.5 Stars</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, index) => (
          <Grid item key={index} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List
