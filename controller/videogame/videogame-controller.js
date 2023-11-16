const axios = require('axios');
require('dotenv').config()
const apiKey = process.env.VIDEOGAME_APIKEY
const URL = `https://api.rawg.io/api/games?key=${apiKey}`


const getVideogames = async (req, res) => {
    try {
        const {page, page_size, seatchParams} = req.body
        let finalURL = `${URL}&ordering=-released&metacritic=10,100&tags=multiplayer&page=${page}&page_size=${page_size}&search=${seatchParams.name}`;       
        const response = await axios.get(finalURL)
        return res.send(response.data)
    } catch (error) {
        res.send(null)
    }

}


const getVideogame = async (req, res) => {
  
}



module.exports = {
    getVideogames,
    getVideogame
}