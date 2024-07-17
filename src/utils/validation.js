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
    const selectedDate = new Date(dateString);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        return 'Due date cannot be in the past.';
    }

    return '';
};