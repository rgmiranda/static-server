const express = require('express');
const app = express();
const morgan = require('morgan');

app.use([morgan('tiny'), express.static('public')]);

app.listen(3000);