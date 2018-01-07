

/**
 * Sets the left right of the text.
 *
 * The value can be a number, an increment, decrement or "reset":
 * - +<number> - Increments existing right margin by <number>
 * - -<number> - Decrements existing right margin by <number>
 * - <number> - Sets right margin to <number>
 * - "reset" - Sets right margin to 0
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_right_margin
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
 * @param {Object} style CSS Style Object to update
 * @param {string} value the right margin
 */
export function right_margin_adapter(style, value) {
    style.marginRight = (value === 'reset') ? 0 : value;
}


