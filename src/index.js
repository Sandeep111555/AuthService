const express = require('express');
const {User,Role} = require('./models');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const db = require('./models');
const app = express();

app.use(express.json()); //to make express understand that the incoming payload is a json object
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});