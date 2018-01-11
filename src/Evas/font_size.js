
const FIX_SIZE_RATIO = 0.76;

/**
 * This sets the the size of font in points to be used.
 *
 * @todo understand why this size ratio is necessary
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_font_size
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
 * @param {Object} style CSS Style Object to update
 * @param {string} value Font size in points
 */
export function font_size_adapter(style, value) {
    const nValue = Number(value) * FIX_SIZE_RATIO;
    style.fontSize = `${nValue}pt`;
}
