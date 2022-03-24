const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
})