const request = require('request');
const {promisify} = require('util');
require('dotenv').config() //www.npmjs.com/package/envdot

const promisifiedRequest = promisify(request);
 
const getWeather = async()=> {
    let data = await promisifiedRequest({
        uri:`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.APPID}`,
        json:true
    });
    console.log(data.body);
    
}
getWeather()

