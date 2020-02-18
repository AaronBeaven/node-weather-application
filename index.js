const request = require('request');
require('dotenv').config() //www.npmjs.com/package/envdot

const getWeather = () => {
    request({
        uri: `https://api.openweathermap.org/data/2.5/find?q=London,uk&APPID=${process.env.APPID}`,
        json: true
        //json format if true raw data if falso 
    }, (err, res) => {
        if (err) throw err;
        //comment what error message came up 
        /*
        Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.'
        */
        console.log(res.body)
    })
}

getWeather();

