const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const mongoose = require('mongoose');



//router files
const notes = require('./routes/route-notes');

//configs
const PORT = 12345;


//morgan
const rfslog = rfs.createStream('access.log', {
    interval: '10d',
    path: path.join(__dirname, 'log')
});

const logformat = `:remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"`;
app.use(morgan(logformat, {stream: rfslog}));


//bodyparser for post data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//pug template engine for error pages
app.set("views", path.join(__dirname, 'files/views'))
app.set('view engine', 'pug');


//1 load routing module
app.use('/api/', notes);

//static files under /files dir
app.use('/files', express.static(path.join(__dirname, 'files')));

//5xx error pages
app.use((err, req, res, next) => {
    let errorCode = err.status || 500;

    res.status(errorCode);
    res.render('error', {title:"ERROR "+errorCode, errorcode:"ERROR "+errorCode, message: err.stack});
});

//404 error
app.use((req, res, next) => {
    res.status(404);
  
    res.format({
      html: function () {
        res.render('error', {title:"ERROR 404"+res.status, errorcode:"ERROR 404", message: "Path not found"});
      },
      json: function () {
        res.json({ error: 'Not found' })
      },
      default: function () {
        res.type('txt').send('Not found')
      }
    })
  });

app.listen(PORT, () => {
    console.info(`Example app listening on port ${PORT}`)
  });



  
