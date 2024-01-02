import * as crypto from 'crypto';

function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.createHash('md5').update(password + salt).digest('hex');
  return { salt, hash };
}

function verifyPassword(password: string, hashedPassword: string, salt: string) {
  const hash = crypto.createHash('md5').update(password + salt).digest('hex');
  return hash === hashedPassword;
}

const userPassword = 'mySecretPassword';
const hashedData = hashPassword(userPassword);

console.log('Salt:', hashedData.salt);
console.log('Hashed Password:', hashedData.hash);

const isPasswordCorrect = verifyPassword(userPassword, hashedData.hash, hashedData.salt);
console.log('Is Password Correct?', isPasswordCorrect);
