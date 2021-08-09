import React, { useEffect, useState } from 'react'

import { CssBaseline, Grid } from '@material-ui/core'

import Header from './Components/Header/Header'
import Map from './Components/Map/Map'
import List from './Components/List/List'

import { getPlacesData } from './Api/index'

const App = () => {
  const [places, setPlaces] = useState([])
  const [coords, setCoords] = useState({})
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(null)
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('0')
  const [filteredPlaces, setfilteredPlaces] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  useEffect(() => {
    setLoading(true)
    getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) => {
        setfilteredPlaces([])
        setPlaces(data)
      })
      .then(() => setLoading(false))
  }, [type, coords, bounds])

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating)
    setfilteredPlaces(filteredPlaces)
    //eslint-disable-next-line
  }, [rating])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            loading={loading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
