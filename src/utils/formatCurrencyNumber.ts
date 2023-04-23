export const formatCurrencyNumber = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount);
};
