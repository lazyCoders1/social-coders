require('dotenv').config()
const axios = require('axios')
const { GOOGLE_API_KEY } = process.env

module.exports = {
  getLocation: async (req, res) => {
    let { street, city, state } = req.body
    street = street.replace('', '+')
    city = city.replace('', '+')
    state = state.replace('', '+')
    const result = await axios({
      method: 'GET',
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${street},+${city},+${state}&key=${GOOGLE_API_KEY}`
    })
    res.status(200).send({
      location: result.data.results[0].geometry.location
    })
  }
}
