
// Returns an array [distance, radius]
const APPEARANCE_MAP = {
    // set distance & radius to 0
    plain: [0, 0],
    get off() { return this.plain; },
    get none() { return this.plain; },
    // default to 1px distance & 2px radius
    shadow: [1, 2],
    // no distance for glow effect
    glow: [0, 10],
    // adapt distance & radius for far & soft variants
    far_shadow: [2, 2],
    soft_shadow: [1, 1],
    far_soft_shadow: [2, 1],
};

/**
 * Sets the style of the text.
 * The value must be a string composed of two comma separated parts.
 * The first part of the value sets the appearance of the text, the second the position.
 *
 * The first part may be any of the following values:
 * - "plain", "off", "none" - Aliases for "plain"
 * - "shadow"
 * - "outline", "soft_outline", "outline_shadow", "outline_soft_shadow"
 * - "glow"
 * - "far_shadow", "soft_shadow",  "far_soft_shadow"
 *
 * The second part may be any of the following values:
 * - "bottom_right", "bottom",  "bottom_left"
 * - "top_left", "top", "top_right"
 * - "left", "right"
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_style
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
 * @param {Object} style CSS Style Object to update
 * @param {string} value shadow / glow style & position separated by a coma (ex: "shadow,bottom_right")
 */
export function style_adapter(style, value) {
    let [appearance, position] = value.split(':');

    // limited outline support
    // TODO might be better supported via border to handle position (left/right/top/bottom)
    const isSoftOutline = ['soft_outline', 'outline_soft_shadow'].includes(appearance);
    if (isSoftOutline || ['outline', 'outline_shadow'].includes(appearance)) {
        const weight = isSoftOutline ? 0.5 : 1;
        style.outline = `${weight}px solid`;
        if (appearance.endsWith('shadow')) {
            appearance = 'shadow';
        } else {
            return;
        }
    }

    // shadow / glow
    const [offset, radius] = APPEARANCE_MAP[appearance];

    if (!offset && !radius) {
        style.textShadow = 'none';
        return;
    }

    let x = 0;
    let y = 0;
    position.split('_').forEach(pos => {
        switch (pos) {
            case 'left':
                x = -offset;
                break;
            case 'right':
                x = offset;
                break;
            case 'top':
                y = offset;
                break;
            case 'bottom':
                y = -offset;
                break;
            default:
                console.warn('wrong style value', value, style);
        }
    });

    style.textShadow = `${x}px ${y}px ${radius}px`;
}
