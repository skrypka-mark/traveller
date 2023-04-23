export const withMinimumValue = (value: number, minimum: number): number => {
    if(value >= minimum) return value;
    return minimum;
};
