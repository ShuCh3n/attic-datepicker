export const usePreviousDate = (date: any) => {
    const display = [];

    for (let i = 0; i <= date.date(0).day(); i++) {
        display.push(date.date(0).subtract(i, 'day'));
    }

    return display.sort((a, b) => a.date() - b.date());
}

export const useCurrentDate = (date: any) => {
    return Array.from(
        {
            length: date.daysInMonth()
        },
        (v, k) => date.date(k + 1)
    );
}
