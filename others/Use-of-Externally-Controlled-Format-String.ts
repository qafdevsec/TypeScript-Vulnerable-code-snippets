/*
Type Of Vulnerability : Use of Externally-Controlled Format String
CWE : CWE-134
*/
import express, { Request, Response } from 'express';

const app = express();

app.get('/unauthorized', (req: Request, res: Response) => {
    let user = req.query.user; //Source
    let ip = req.connection.remoteAddress;
    console.log("Unauthorized access attempt by " + user, ip); //Sink
});

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
