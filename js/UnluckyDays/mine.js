function unluckyDays(year) {
    let fri13s = 0;
    for (let i = 0; i <= 11; i++) {
        // Month loop
        let date = 1;
        let day = new Date(year, i, 1).getDay();
        if (day < 5) {
            date += 5 - day;
        } else if (day > 5) {
            // sat
            date += 6;
        }

        if (date === 13) {
            fri13s++;
        } else if (date < 13) {
            if (date + 7 === 13) {
                fri13s++;
            }
        }
    }
    return fri13s;
}