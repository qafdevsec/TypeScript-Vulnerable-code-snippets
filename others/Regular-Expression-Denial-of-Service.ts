/*
Type Of Vulnerability : Regular Expression Denial of Service (ReDoS)
CWE : CWE-400
*/

import express from 'express';

const app = express();
const PORT = 3000;

app.get('/lookup', (req, res) => {
    const regexPattern: string | undefined = req.query.regex as string; //Source
    const inputData: string | undefined = req.query.data as string;

    if (regexPattern && inputData) {
        try {
            const regex = new RegExp(regexPattern); //Sink
            if (regex.test(inputData)) {
                res.send("It's a Match!");
            } else {
                res.send("Not a Match!");
            }
        } catch (error) {
            res.status(400).send("Invalid Regular Expression");
        }
    } else {
        res.status(400).send("Invalid Input");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
