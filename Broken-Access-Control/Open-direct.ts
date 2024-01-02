/*
Type Of Vulnerability : Open Redirect
CWE : CWE-601
*/

import * as express from 'express';

const app = express();
const port = 3000;

app.get('/redirect', (req, res) => {
  const redirectUrl = req.query.url as string; // Source

  // Insecure redirection, no validation or sanitization
  res.redirect(redirectUrl); //Sink
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
