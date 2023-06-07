export function capitalizeWord(word: string) {
    const splitWord = word.split(' ');
    const capitalizeWords = splitWord.map((word) => {
        const firstLetterCap = word.charAt(0).toUpperCase();
        const capitalizeWord = firstLetterCap + word.slice(1);
        return capitalizeWord;
    });
    return capitalizeWords.join(' ');
}

export function converDateToString(
    date: Date,
    options: Intl.DateTimeFormatOptions | undefined = { year: 'numeric', month: '2-digit', day: '2-digit' },
) {
    return date.toLocaleString([], options);
}
/*
        The year property can be set to:
        numeric - e.g. 2022
        2-digit - e.g. 22

        The month property can be set to:
        numeric - e.g. 9
        2-digit - e.g. 09
        long - e.g. September
        short - e.g. Sep
        narrow - e.g. S
        
        The day property can be set to:
        numeric - e.g. 4
        2-digit - e.g. 04
*/
