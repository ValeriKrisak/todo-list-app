export const validateMaxLength = (value, maxLength) => {
    return value.length <= maxLength;
};

export const validateInput = (value, maxLength) => {

    if (!validateMaxLength(value, maxLength)) {
        return `Field cannot exceed ${maxLength} characters`;
    }
    return '';
};
