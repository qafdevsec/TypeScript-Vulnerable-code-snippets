import * as jwt from 'jsonwebtoken';

// Vulnerable code that accepts JWTs signed with 'none' algorithm
const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, '', { algorithms: ['none'] });
    return decoded;
  } catch (error) {
    return null;
  }
};

// Example JWT signed with 'none' algorithm
const maliciousToken = 'eyJhbGciOiAiTk9ORSIsICJ0eXAiOiAiSldUIiB9.eyJzdWIiOiAiMTIzNDU2Nzg5MCIsICJpYXQiOiAxNTE2MjM5MDIyfQ.';

const result = verifyToken(maliciousToken);

if (result) {
  console.log('Token verified:', result);
} else {
  console.warn('Token verification failed.');
}
