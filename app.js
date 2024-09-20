const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
// 注意dotenv引用的位置，一定要在自定义的两个中间件和其他路由上面。因为在这两个中间件里，也使用了环境变量。
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// 添加路由
const adminServiceRouter = require('./routes/admin/service');
const adminEventRouter = require('./routes/admin/event');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 添加路由
app.use('/admin/service', adminServiceRouter);
app.use('/admin/event', adminEventRouter);

module.exports = app;
