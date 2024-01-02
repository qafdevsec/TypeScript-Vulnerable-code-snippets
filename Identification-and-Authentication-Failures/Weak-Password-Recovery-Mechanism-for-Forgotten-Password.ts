import express from 'express';

const app = express();
const PORT = 3000;

interface User {
    username: string;
    password: string;
    email: string;
}

const users: User[] = [
    { username: 'user1', password: 'weakpassword1', email: 'user1@example.com' },
    { username: 'user2', password: 'password123', email: 'user2@example.com' },
    // ... other users
];

app.use(express.json());

app.post('/forgot-password', (req, res) => {
    const { email } = req.body;

    // Find the user by email (insecure, no real authentication, and no validation)
    const user = users.find(u => u.email === email);

    if (user) {
        // Insecure password reset mechanism: sending the password in response (never do this)
        res.json({ message: `Your password is: ${user.password}` });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
