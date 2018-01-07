

const WEIGHT_MAP = {
    thin: 100,
    ultralight: 100,
    extralight: 200,
    light: 300,
    normal: 'normal', // 400
    book: 400,
    medium: 500,
    semibold: 600,
    bold: 'bold', // 700
    extrabold: 800,
    ultrabold: 900,
    black: 800,
    extrablack: 900,
};

/**
 * Sets the weight of the font.
 *
 * The value must be one of:
 * - "normal"
 * - "thin"
 * - "ultralight"
 * - "extralight"
 * - "light"
 * - "book"
 * - "medium"
 * - "semibold"
 * - "bold"
 * - "ultrabold"
 * - "extrabold"
 * - "black"
 * - "extrablack"
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_font_weight
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
 * @param {Object} style CSS Style Object to update
 * @param {string} value Font weight
 */
export function font_weight_adapter(style, value) {
    style.fontWeight = WEIGHT_MAP[value];
}


