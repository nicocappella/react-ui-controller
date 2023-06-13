export const queryConverter = (obj: { [key: string]: string | number | boolean | undefined }) => {
    const keys = Object.keys(obj);
    const stringArr = keys.map((d) => `${d}=${obj[d]}`).join('&');
    return `?${stringArr}`;
};
