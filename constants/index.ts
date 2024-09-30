export const apiOrigin = "http://192.168.0.104:3000/api";
export interface AnyElement {
    [key: string]: any
}

export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};