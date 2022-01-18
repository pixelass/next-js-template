/**
 * Appends the unit suffix to a number
 * @param {number} n
 * @return {`${number}rem`}
 * @example
 * rem(10) // "10rem"
 */
export const rem = n => `${n}rem`;

/**
 * Converts a number from pixel to rem and adds the unit suffix.
 *
 * @param {number} pixel
 * @param {number} rootFontSize
 * @return {`${number}rem`}
 * @example
 * pxToRem(16) // "1rem"
 */
export const pxToRem = (pixel, rootFontSize = 16) => rem(pixel / rootFontSize);
