/*
Type Of Vulnerability : Insecure JWT Verification Method
CWE : CWE-347
*/
import * as jwt from 'jsonwebtoken';

// This function verifies a JWT token without checking the signature
function verifyTokenWithoutSignature(token: string, secret: string): any {
  return jwt.decode(token, { complete: true }); //Source and Sink
}

// Example usage of the above function
const token = 'eyJhbGciOiAiSFMyNTYiLCAidHlwIjoiSldUIn0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ';
const secret = 'insecure_secret_key';

const decodedToken = verifyTokenWithoutSignature(token, secret);

// If the signature verification is disabled, the decodedToken will not be null, regardless of the token's validity
if (decodedToken !== null) {
  console.log('Token is verified without signature verification.');
  console.log(decodedToken);
} else {
  console.log('Invalid token.');
}
