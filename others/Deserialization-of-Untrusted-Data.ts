interface User {
    id: number;
    username: string;
    // Add more properties as needed
}

function deserializeUser(userData: string): User | null {
    try {
        // Parse untrusted data (JSON string) into a User object
        const user: User = JSON.parse(userData);

        // Validate the parsed data (optional, depending on the use case)
        if (typeof user.id === 'number' && typeof user.username === 'string') {
            // Data is valid, return the user object
            return user;
        } else {
            // Data is invalid, return null or handle the error accordingly
            return null;
        }
    } catch (error) {
        // Handle JSON parsing errors
        console.error('Error during deserialization:', error);
        return null;
    }
}

// Example usage with untrusted data (JSON string)
const untrustedData = '{"id": 1, "username": "john_doe"}';

const user = deserializeUser(untrustedData);

if (user) {
    console.log('Deserialized User:', user);
} else {
    console.log('Invalid or malicious data detected.');
}
