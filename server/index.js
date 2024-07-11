const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({orgin:"*"}));

require('./conn/dbConnection');

const routes = require('./routes/userRoutes');

app.use(express.urlencoded());
app.use(express.json());

app.use('/uploads', express.static('uploads'));

const port = 5000;

app.listen(port, () => {
    console.log('Server is running on ' + `${port}`);
});


app.use('/api/', routes);
