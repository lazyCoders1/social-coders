require('dotenv').config()
const axios = require('axios')
const { GOOGLE_API_KEY } = process.env

module.exports = {
  addMeetUp: async (req, res) => {
    const {
      title,
      img,
      description,
      time,
      date,
      street,
      city,
      state,
      zipcode,
      author_id
    } = req.body
    const db = await req.app.get('db')
    const meetUp = await db.add_meetup(
      title,
      img,
      description,
      time,
      date,
      street,
      city,
      state,
      zipcode,
      author_id
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

  // deleteMeetup: async (req, res) => {
  //   const { user_id } = req.session.user
  //   const db = await req.app.get('db')
  //   console.log("req.session.user", req.session.user)
  //   console.log("user_id", user_id)
  //   db.delete_meetup(user_id).then(res => res.status(200).send(res))
  // },
  //? practice async fn

  deleteMeetup: (req, res) => {
    const db = req.app.get('db')
    // console.log(req.params.id);
    // console.log(req.params);
    db.delete_meetup(req.params.id)
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => console.log(err))
  },

  getMeetups: async (req, res) => {
    const db = req.app.get('db')
    const meetups = await db.get_meetups()
    res.status(200).send(meetups)
  }
}
