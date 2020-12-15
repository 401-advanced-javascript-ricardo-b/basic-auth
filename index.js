'use strict';

require('dotenv').config();

const PORT = process.env.PORT;
const server = require('./server')
const mongoose = require('mongoose');



mongoose.connect(process.env.MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.start(PORT, () => console.log('server up'));
  })
  .catch(e => console.error('Could not start server', e.message));
