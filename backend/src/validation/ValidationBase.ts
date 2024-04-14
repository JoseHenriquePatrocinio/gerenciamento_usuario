import { UserRole } from "../enum/UserEnum";

export default {
    isValidEmail(email: string): boolean {
        if (email.trim() === '') {
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email);
    },

    isFirstNameValid(firstName: string): boolean {
        return (!!firstName && firstName.length > 1 && firstName.length < 50);
    },

    isLastNameValid(lastName: string): boolean {
        return (!!lastName && lastName.length > 1 && lastName.length < 50);
    },

    isValidRole(role: UserRole): boolean {
        return role >= UserRole.ADMIN && role <= UserRole.GUEST;
    }
}