const express = require('express');
const app = express();
const path = require('path');
const PORT = '8008';
const https = require('https');
const weather = require('openweather-apis');
const weatherAPIkey = require('./config');


app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json())
//Weather Api Settings
weather.setLang('en');
weather.setUnits('imperial');
weather.setAPPID(weatherAPIkey)

//News 
app.get('/news',(req,res)=>{
  https.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=ec8fc478c2334268a798947f63af7118',(resp)=>{
    res.status(200).send(resp)
  })
})

//weather tool
app.get('/weather', (req, res) => {
  let zip = req.query.zip;
  weather.setZipCode(zip);
  weather.getAllWeather((err, JSONObj) => {
    if (err) {
      console.error('Bad Hit', err)
      res.status(400).send('no good',err)
    } else {
      res.status(200).send(JSONObj)
    }
  })
  // res.status(200).send('ok')
})

app.listen(PORT, () => {
  console.log(`server is CONNECTED on PORT:${PORT}`);
});
