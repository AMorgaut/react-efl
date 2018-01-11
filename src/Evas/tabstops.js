
/**
 * Sets the size of the tab character.
 *
 * The value must be a number greater than one.
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_tabstops
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size
 * @param {Object} style CSS Style Object to update
 * @param {string} value ellipsis value
 */
export function tabstops_adapter(style, value) {
    style.tabSize = Number(value);
}
