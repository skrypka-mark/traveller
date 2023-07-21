export const formatCurrencyNumber = (amount: number, currency: string = 'USD') => {
    if(!Number(amount)) return amount;
    return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount);
};
