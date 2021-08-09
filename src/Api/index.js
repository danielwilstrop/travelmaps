import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data }
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        currency: 'GBP'
      },
      headers: {
        'x-rapidapi-key': '606dff5d6fmshb604f602b55f55cp11947djsnf08462c27ea3',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    })

    return data
  } catch (error) {
    console.log(error.message)
  }
}
