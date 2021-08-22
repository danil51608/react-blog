const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/post', (req, res) => {
    console.log('Node works')
})


app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})