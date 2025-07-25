import type { ISliceText } from "../interfaces"
/**
 * Slice the text to the maximum length
 * @param {ISliceText} text - The text to slice  
 * @param {number} maxLength - The maximum length of the text
 * @returns The sliced text with ellipsis
 * @example
 * sliceText({ text: "Hello, world!", maxLength: 5 }) // "Hello..."
 * sliceText({ text: "Hello, world!", maxLength: 10 }) // "Hello, world!"
 
 */




export const sliceText = ({ text, maxLength = 50 }: ISliceText) => {
    if (text.length >= maxLength) {
        return `${text.slice(0, maxLength)} ...`
    }
    return text
}

export const priceFormat = (price: number) => {
    const formattedPrice = price.toFixed(3);
    const parts = formattedPrice.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$${parts.join('.')}`;


}
