var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var jobsRouter = require('./routes/jobs');

const PORT = 8081;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/jobs', jobsRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

module.exports = app;
