export function capitalizeWord(word: string) {
    const splitWord = word.split(' ');
    const capitalizeWords = splitWord.map((word) => {
        const firstLetterCap = word.charAt(0).toUpperCase();
        const capitalizeWord = firstLetterCap + word.slice(1);
        return capitalizeWord;
    });
    return capitalizeWords.join(' ');
}
