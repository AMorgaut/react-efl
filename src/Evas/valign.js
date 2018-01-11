
const NUMBER_REGEXP = /\d+(\.\d+)?%?/;

const TEXT_VERTICAL_ALIGN_CSS_VALUES = [
    'baseline',
    'sub',
    'super',
    'text-top',
    'text-bottom',
    'middle',
    'top',
    'bottom',
];

/**
 * Sets the vertical alignment of the text.
 *
 * The value can either be a number or one of the following presets
 * - "top" - Puts text at the top of the line
 * - "center" - Centers the text in the line
 * - "middle" - Alias for "center"
 * - "bottom" - Puts the text at the bottom of the line
 * - "baseline" - Baseline
 * - "base" - Alias for "baseline"
 * - <number> - A number between 0.0 and 1.0 where 0.0 represents "top" and 1.0 represents "bottom"
 * - <number>% - A percentage between 0% and 100% where 0% represents "top" and 100% represents "bottom"
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_valign
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align
 * @param {Object} style CSS Style Object to update
 * @param {string} value vertical align value
 */
export function valign_adapter(style, value) {
    let cssValue = null;

    if (value === 'center') {
        // middle is an alias to center
        cssValue = 'middle';
    } else if (value === 'base') {
        // base is an alias to baseline
        cssValue = 'baseline';
    } else if (TEXT_VERTICAL_ALIGN_CSS_VALUES.includes(value)) {
        cssValue = value;
    } else if (value.match(NUMBER_REGEXP)) {
        let suffix = '';
        cssValue = value;
        if (value.endsWith('%')) {
            cssValue = cssValue.replace('%', '');
            suffix = '%';
        }
        // percent values look to be inversed from CSS ones
        cssValue = -1 * Number(cssValue);
        cssValue = `${cssValue}${suffix}`;
    } else {
        console.error('non-standard valign value:', value);
        return;
    }
    style.verticalAlign = cssValue;

    const prefix = value.endsWith('%') ? '-' : '';
    style.verticalAlign = `${prefix}${value}`;
}
