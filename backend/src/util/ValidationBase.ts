export default {
    isValidEmail(email: string): boolean {
        if (email.trim() === '') {
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email);
    }
}