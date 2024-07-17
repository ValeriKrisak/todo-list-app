import { unixToDateInput } from '@/utils/dateConversion'


export const validateMaxLength = (value, maxLength) => {
    return value.length <= maxLength;
};

export const validateInput = (value, maxLength) => {

    if (!validateMaxLength(value, maxLength)) {
        return `Field cannot exceed ${maxLength} characters`;
    }
    return '';
};

export const validateDate = (dateString) => {
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (isoDateRegex.test(dateString)) {
        return validateISODate(dateString);
    } else {
        const convertedUnixDate = unixToDateInput(dateString);
        return validateISODate(convertedUnixDate);
    }
};

const validateISODate = (isoDateString) => {
    const selectedDate = new Date(isoDateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        return 'Due date cannot be in the past.';
    }

    return '';
};

