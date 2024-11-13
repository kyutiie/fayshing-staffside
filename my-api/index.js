const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Update this array with your desired users
const users = [
    { email: 'admin@example.com', password: 'admin' }, // Valid user 1
    { email: 'user1@example.com', password: 'mypassword' }, // Valid user 2
    // Add more users as needed
];

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    console.log('Login attempt:', email, password); // Debug log

    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        res.status(200).json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
