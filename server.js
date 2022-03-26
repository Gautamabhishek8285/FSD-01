const express = require('express')
const app = express();

const PORT = 4000;

app.listen(PORT, () => {
    require('./app') (app, {});
});

app.use(express.json())