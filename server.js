const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const users = []; // This is a simple in-memory store. Use a database in production.

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    users.push({ username, password: hashedPassword });
    res.status(201).send({ message: 'User created' });
});

app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.username }, 'secretkey', { expiresIn: 86400 });
        res.status(200).send({ auth: true, token });
    } else {
        res.status(401).send({ auth: false, token: null });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
