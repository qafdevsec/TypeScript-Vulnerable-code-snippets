import * as crypto from 'crypto';

function insecureEncryption(data: string, key: string): string {
    const cipher = crypto.createCipher('aes-128-ecb', key);
    let encryptedData = cipher.update(data, 'utf8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
}

function insecureDecryption(encryptedData: string, key: string): string {
    const decipher = crypto.createDecipher('aes-128-ecb', key);
    let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');
    return decryptedData;
}

const secretData = 'Sensitive information';
const encryptionKey = 'weakkey';  // Weak encryption key

// Insecure encryption
const encryptedData = insecureEncryption(secretData, encryptionKey);
console.log('Encrypted Data:', encryptedData);

// Insecure decryption
const decryptedData = insecureDecryption(encryptedData, encryptionKey);
console.log('Decrypted Data:', decryptedData);
