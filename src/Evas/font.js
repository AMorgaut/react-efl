
/**
 * This sets the the size of font in points to be used.
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_font
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face
 * @param {Object} style CSS Style Object to update
 * @param {string} value Font family name, potentially separated by ':' from a font type (ex: "InterstatePro:bold")
 */
export function font_adapter(style, value) {
    let [family, weight] = value.split(':');
    style.fontFamily = family;
    if (weight) {
        if (weight.startsWith('style=')) {
            weight = weight.substr(6);
        }
        if (weight === 'regular') {
            weight = 'normal';
        }
        font_weight_adapter(style, weight);
    }
}
