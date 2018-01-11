
const UNDERLINE_MAP = {
    off: 'unset',
    single: 'solid',
    on: 'solid',
    double: 'double',
    dashed: 'dashed',
};

/**
 * Sets if and how a text will be underlined.
 *
 * The value must be one of the following:
 * - "off" - No underlining
 * - "single" - A single line under the text
 * - "on" - Alias for "single"
 * - "double" - Two lines under the text
 * - "dashed" - A dashed line under the text
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_underline
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color
 * @param {Object} style CSS Style Object to update
 * @param {string} value underline type
 */
export function underline_adapter(style, value) {
    if (value === 'off' && style.textDecorationLine !== 'underline') {
        style.textDecorationLine = 'none';
    } else {
        style.textDecorationLine = 'underline';
        style.textDecorationStyle = UNDERLINE_MAP[value];
    }
}
