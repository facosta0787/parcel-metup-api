const express = require('express');
const asyncify = require('express-asyncify');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const PORT = 3001;
const app = asyncify(express());

app.use(cors());
app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use('/api', (req, res) => {
    axios.get('https://api.meetup.com/React-Medellin/events/261268608/attendance?key=7f1c38117d3f603bd7121a474485e&sign=true')
    .then(response => {
      return res.status(200).send(response.data);
    })
    .catch((error) => {
      return res.status(400).send({status: error})
    });
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`)
})