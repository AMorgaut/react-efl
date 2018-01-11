
const STRECH_MAP = {
    normal: 'normal',
    ultracondensed: 'ultra-condensed',
    extracondensed: 'extra-condensed',
    condensed: 'condensed',
    semicondensed: 'semi-condensed',
    semiexpanded: 'semi-expanded',
    expanded: 'expanded',
    extraexpanded: 'extra-expanded',
    ultraexpanded: 'ultra-expanded',
};

/**
 * Sets the width of the font.
 *
 * The value must be one of:
 * - "normal"
 * - "ultracondensed", "extracondensed", "condensed", "semicondensed"
 * - "semiexpanded", "expanded", "extraexpanded", "ultraexpanded"
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_font_width
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch
 * @param {Object} style CSS Style Object to update
 * @param {string} value Font width
 */
export function font_width_adapter(style, value) {
    style.fontStrech = STRECH_MAP[value];
}
