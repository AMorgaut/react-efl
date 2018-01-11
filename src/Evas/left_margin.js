
/**
 * Sets the left margin of the text.
 *
 * The value can be a number, an increment, decrement or "reset":
 * - +<number> - Increments existing left margin by <number>
 * - -<number> - Decrements existing left margin by <number>
 * - <number> - Sets left margin to <number>
 * - "reset" - Sets left margin to 0
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_left_margin
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
 * @param {Object} style CSS Style Object to update
 * @param {string} value the left margin
 */
export function left_margin_adapter(style, value) {
    style.marginLeft = (value === 'reset') ? 0 : value;
}
