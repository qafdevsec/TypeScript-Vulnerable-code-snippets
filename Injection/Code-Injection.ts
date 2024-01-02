import express from 'express';

const app = express();
const PORT = 3000;

app.get('/perform-operation', (req, res) => {
    const operation: string | undefined = req.query.operation as string;

    if (operation) {
        try {
            // Assuming there are functions like product_add, product_subtract, etc.
            // Make sure to sanitize the 'operation' input to prevent code injection vulnerabilities
            eval(`product_${operation}()`);
            res.send('OK');
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    } else {
        res.status(400).send('Invalid operation');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
