
/**
 * Sets the style of the font.
 * The value must be one of: "normal", "oblique", "italic"
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_font_style
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
 * @param {Object} style CSS Style Object to update
 * @param {string} value Font style
 */
export function font_style_adapter(style, value) {
    style.fontStyle = value;
}
