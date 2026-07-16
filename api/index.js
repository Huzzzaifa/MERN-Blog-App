const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Huzaifa:Let-Down-1989-2004@cluster0.7iuysx3.mongodb.net/?appName=Cluster0');

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try {
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password,salt)
        });
        res.json(userDoc);
    } catch(e) {
        res.status(400).json(e);
    }
});

app.listen(4000);
//mongodb+srv://Huzaifa:Let-Down-1989-2004@cluster0.7iuysx3.mongodb.net/

//SRV Connection String
//mongodb+srv://Huzaifa:Let-Down-1989-2004@cluster0.7iuysx3.mongodb.net/?appName=Cluster0