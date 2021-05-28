export const escapedRegExpFromString = str => {
    const espacedSpecialWords = str.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
    const allowMoreWhiteSpaces = espacedSpecialWords.replace(/\s/g, "\\s*");
    return allowMoreWhiteSpaces;
};

export const findItems = ({ queryText, data = [] }) => {
    if (!queryText || queryText.length === 0) {
        return [];
    }
    const regex = new RegExp(`\\b${escapedRegExpFromString(queryText)}`, "gi");
    const filteredItems = data
        .filter(item => item.label.search(regex) >= 0)
        .map(item => {
            let offset = 0;
            let match = true;
            const { label } = item;
            const itemsSplitted = [];

            while (match) {
                match = regex.exec(label);
                if (!match) {
                    break;
                }
                const { index } = match;
                const { lastIndex } = regex;
                if (index > 0) {
                    itemsSplitted.push({
                        text: label.substring(offset, index),
                        index: offset,
                    });
                }
                itemsSplitted.push({
                    text: label.substring(index, lastIndex),
                    hightlight: true,
                    index,
                });
                offset = lastIndex;
            }

            if (offset < label.length) {
                itemsSplitted.push({
                    text: label.substring(offset, label.length),
                    index: offset,
                });
            }

            return {
                ...item,
                itemsSplitted,
            };
        });
    return filteredItems;
};
