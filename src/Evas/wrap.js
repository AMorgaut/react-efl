
/**
 * Sets the wrap policy of the text.
 *
 * The value must be one of the following:
 * - "word" - Only wraps lines at word boundaries
 * - "char" - Wraps at any character
 * - "mixed" - Wrap at words if possible, if not at any character
 * - "hyphenation" - Hyphenate if possible, if not wrap at words if possible, if not at any character
 * - "" - Don't wrap
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_wrap
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens
 * @param {Object} style CSS Style Object to update
 * @param {string} value vertical align value
 */
export function wrap_adapter(style, value) {
    switch (value) {
        case 'word':
            style.overflowWrap = 'normal';
            style.wordBreak = 'normal';
            break;
        case 'char':
            style.overflowWrap = 'break-word';
            style.wordBreak = 'break-all';
            break;
        case 'mixed':
            style.overflowWrap = 'break-word';
            style.wordBreak = 'normal';
            break;
        case 'hyphenation':
            style.overflowWrap = 'break-word';
            style.wordBreak = 'normal';
            style.hyphen = 'manual';
            break;
        case '':
            style.overflowWrap = 'normal';
            style.wordBreak = 'keep-all';
            break;
        default:
            console.error('Invalid wrap value', value);
    }
}
