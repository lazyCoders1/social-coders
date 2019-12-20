require('dotenv').config()
const axios = require('axios')
const { GOOGLE_API_KEY } = process.env

module.exports = {
  addMeetUp: async (req, res) => {
    const {
      title,
      img,
      description,
      date,
      street,
      city,
      state,
      zipcode
    } = req.body
    const db = await req.app.get('db')
    const meetUp = await db.add_meetup(
      title,
      img,
      description,
      date,
      street,
      city,
      state,
      zipcode
    )
    if (meetUp[0]) {
      res.status(201).send({ message: 'Meet Up created!', data: meetUp })
    } else {
      res.status(417).send({ message: 'Something went wrong :(' })
    }
  },
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
  },
  deleteMeetup: async (req, res) => {
    const { user_id } = req.session.user
    const db = await req.app.get('db')
    db.delete_meetup(user_id).then(res => res.status(200).send(res))
  },
  getMeetups: async (req, res) => {
    const db = req.app.get('db')
    const meetups = await db.get_meetups()
    res.status(200).send(meetups)
  }
}
