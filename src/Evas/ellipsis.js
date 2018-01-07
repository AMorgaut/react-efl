

/**
 * Sets ellipsis mode.
 *
 * The value should be a number.
 * Any value smaller than 0.0 or greater than 1.0 disables ellipsis.
 * A value of 0 means ellipsizing the leftmost portion of the text first, 1 on the other hand the rightmost portion.
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_ellipsis
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
 * @param {Object} style CSS Style Object to update
 * @param {string} value ellipsis value
 */
export function ellipsis_adapter(style, value) {
    const nValue = Number(value);
    if (nValue === 0) {
        // A value of 0 means ellipsizing the leftmost portion of the text first,
        style.textOverflow = 'ellipsis';
        style.direction = 'rtl';
    } else if (nValue === 1) {
        // 1 on the other hand the rightmost portion.
        style.textOverflow = 'ellipsis';
    } else {
        // Any value smaller than 0.0 or greater than 1.0 disables ellipsis.
        style.textOverflow = '';
    }
}


