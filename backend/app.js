const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const fs = require('fs');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

// bring in routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const mxRoutes = require("./routes/mx");
const membershipRoutes = require("./routes/membership");

// apiDocs
app.get('/', (req, res) => {
    fs.readFile('docs/apiDocs.json', (error, data) => {
        if (error) {
            res.status(400).json({ error })
        }
        const docs = JSON.parse(data);
        res.json(docs);
    });
})

dotenv.config();

// db
mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Connected to DB");
    });

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
})

// middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(morgan("dev"));
app.use(cors());

app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', mxRoutes);
app.use('/', membershipRoutes);

app.use(function (err, req, res) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({error: 'Unauthorized'})
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`A Node JS API is Listening on port: ${port}`)
});
