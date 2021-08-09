import axios from 'axios'

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data }
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          currency: 'GBP'
        },
        headers: {
          'x-rapidapi-key':
            '606dff5d6fmshb604f602b55f55cp11947djsnf08462c27ea3',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
      }
    )

    return data
  } catch (error) {
    console.log(error.message)
  }
}
