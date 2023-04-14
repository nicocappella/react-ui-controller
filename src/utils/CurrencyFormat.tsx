export function convertCurrency(number: number, currency?: string, lang?: string) {
    return number.toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function convertCurrencyToNumber(currencyNumber: string) {
    // const cleanNumber = currencyNumber.split(' ')[1].replace(/[\.]/g, '').replace(',', '.');
    const cleanNumber = currencyNumber.replace('.', '').replace(',', '.');
    const number = cleanNumber === '' ? 0 : Number(cleanNumber);
    return number;
}
