const { response } = require('express');
const { request } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors()) 

const tea = {
    'peppermint':{
        'type': 'herbal',
        'waterTemp': 'medium',
        'steepTime': "4 minutes",
        'caffineLevel': false,
        'flavor': 'minty'
    },
    'chamomile':{
        'type': 'herbal',
        'waterTemp': 'medium',
        'steepTime': "5 minutes",
        'caffineLevel': false,
        'flavor': 'floral'
    },
    'unknown':{
        'type': 'unknown',
        'waterTemp': 'unknown',
        'steepTime': "unknown",
        'caffineLevel': "unknown",
        'flavor': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if (tea[teaName]) {
        response.json(tea[teaName])
    } else {
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on port ${PORT}`)
})