

/**
 * Sets if the text will be striked through.
 *
 * The value must be one of the following:
 * - "off" - No strikethrough
 * - "on" - Strikethrough
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_strikethrough
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line
 * @param {Object} style CSS Style Object to update
 * @param {string} value underline type
 */
export function strikethrough_adapter(style, value) {
    if (value === 'off' && style.textDecorationLine !== 'underline') {
        style.textDecorationLine = 'none';
    } else if (value === 'on') {
        style.textDecorationLine = 'line-through';
    } else {
        console.error('Invalide strikethrough value:', value);
    }
}


