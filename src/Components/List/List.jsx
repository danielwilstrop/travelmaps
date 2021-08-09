import React, { useState, useEffect, createRef } from 'react'
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

const List = ({
  places,
  childClicked,
  loading,
  type,
  setType,
  rating,
  setRating
}) => {
  const classes = useStyles()
  const [elementRefs, setElementRefs] = useState([])

  useEffect(() => {
    setElementRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    )
  }, [places])

  return (
    <div className={classes.container}>
      <Typography variant='h4'>Food & Dining around you</Typography>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <>
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
              <MenuItem value=''>All</MenuItem>
              <MenuItem value='3'>Above 3.0</MenuItem>
              <MenuItem value='4'>Above 4.0</MenuItem>
              <MenuItem value='4.5'>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elementRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elementRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  )
}

export default List
