

/**
 * Sets the size of line of text.
 *
 * The value should be a number.
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_linesize
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
 * @param {Object} style CSS Style Object to update
 * @param {string} value the left margin
 */
export function linesize_adapter(style, value) {
    style.lineHeight = `${value}px`;
}


