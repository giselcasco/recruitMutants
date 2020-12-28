const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');


//middlewares
//app.use(morgan('dev'));
app.use(bodyParser.json())

//settings
app.set('port',3001);

//routes
app.use(require('./routes/index'));


app.listen(app.get('port'));