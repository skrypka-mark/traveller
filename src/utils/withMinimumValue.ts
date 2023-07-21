export const withMinimumValue = (value: number, minimum: number = 1): number => {
    if(value >= minimum) return value;
    return minimum;
};
