import * as jwt from 'jsonwebtoken';

// A secret key (this should be stored securely, e.g., in an environment variable)
const secretKey = 'mysecretkey';

// Create a JWT token (normally done during user login)
const payload = { userId: 123, username: 'user123' };
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

// An attacker's modified token
const modifiedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJhY2NvdW50MTIzIn0.JN1sQ1l3ETZiulU0Qy3wfuFY3UcJ--_bad_token';

// Attempt to verify the token (vulnerable)
jwt.verify(modifiedToken, secretKey, (err, decoded) => {
  if (err) {
    console.error('Token verification failed:', err.message);
  } else {
    console.log('Token verification succeeded:', decoded);
  }
});
