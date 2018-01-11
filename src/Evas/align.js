
const NUMBER_REGEXP = /[0-1](\.\d+)?%?/;

const TEXT_ALIGN_CSS_VALUES = [
    'left',
    'right',
    'center',
    'justify',
    'justify-all',
    'start',
    'end',
];

/**
 * Sets the horizontal alignment of the text.
 *
 * The value can either be a number, a percentage or one of several presets
 * - "auto" - Respects LTR/RTL settings
 * - "locale" - Respects locale(language) direction settings
 * - "center" - Centers the text in the line
 * - "middle" - Alias for "center"
 * - "left" - Puts the text at the left of the line
 * - "right" - Puts the text at the right of the line
 * - <number> - A number between 0.0 and 1.0 where 0.0 represents "left" and 1.0 represents "right"
 * - <number>% - A percentage between 0% and 100% where 0% represents "left" and 100% represents "right"
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_align
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
 * @param {Object} style CSS Style Object to update
 * @param {string} value align value
 */
export function align_adapter(style, value) {
    let cssValue = null;
    if (value === 'middle') {
        // middle is an alias to center
        cssValue = 'center';
    } else if (value === 'auto') {
        // the 'auto' behavior is very similar to the experimental CSS 'start' one
        cssValue = 'start';
    } else if (TEXT_ALIGN_CSS_VALUES.includes(value)) {
        cssValue = value;
    } else if (value.match(NUMBER_REGEXP)) {
        // limited support of number & percent values
        cssValue = value;
        if (value.endsWith('%')) {
            cssValue = cssValue.replace('%', '');
            cssValue = Number(cssValue) / 100;
        } else {
            cssValue = Number(cssValue);
        }
        cssValue = (Math.round(cssValue) === 0) ? 'left' : 'right';
    } else {
        // no support for 'locale'
        console.warn('unsupported text align value:', value);
        return;
    }
    style.textAlign = cssValue;
}
