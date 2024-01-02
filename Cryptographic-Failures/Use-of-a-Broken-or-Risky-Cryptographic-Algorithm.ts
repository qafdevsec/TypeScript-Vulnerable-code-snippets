import crypto from 'crypto';

const secretText = obj.getSecretText();
const key = 'your-secret-key'; // Replace with your actual encryption key

// DES Encryption (Avoid if possible due to weak encryption)
const desCipher = crypto.createCipher('des', key);
let desEncrypted = desCipher.update(secretText, 'utf8', 'hex');
desEncrypted += desCipher.final('hex');

// AES Encryption (Preferred for strong encryption)
const aesCipher = crypto.createCipher('aes-128-cbc', key);
let aesEncrypted = aesCipher.update(secretText, 'utf8', 'hex');
aesEncrypted += aesCipher.final('hex');

console.log('DES Encrypted:', desEncrypted);
console.log('AES Encrypted:', aesEncrypted);
