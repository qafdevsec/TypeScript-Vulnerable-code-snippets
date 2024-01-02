import express, { Request, Response } from 'express';

const app = express();

app.get('/remember-password', (req: Request, res: Response) => {
    const currentPassword: string | undefined = req.query.current_password as string;

    if (currentPassword) {
        // BAD: Setting a cookie value with cleartext sensitive data.
        res.cookie('password', currentPassword);
        res.status(200).send('Password cookie set successfully.');
    } else {
        res.status(400).send('Bad Request: current_password parameter is missing.');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
