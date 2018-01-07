
import { hexaToRgba } from "./util/color";

/**
 * Sets the color of the text.
 *
 * The following formats are accepted: #RGB, #RGBA, #RRGGBB, #RRGGBBAA
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_color
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
 * @param {Object} style CSS Style Object to update
 * @param {string} value color value
 */
export function color_adapter(style, value) {
    style.color = hexaToRgba(value);
}
