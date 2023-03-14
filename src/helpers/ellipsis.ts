export const ellipsis = (str: string, end: number) => {
    if (str.length > end) {
        return str.slice(0, end) + "..."
    } else {
        return str
    }
}