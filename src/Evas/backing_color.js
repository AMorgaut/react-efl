
import { hexaToRgba } from "./util/color";

/**
 * Sets a background color for text.
 *
 * The following formats are accepted: #RGB, #RGBA, #RRGGBB, #RRGGBBAA
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_backing_color
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
 * @param {Object} style CSS Style Object to update
 * @param {string} value color value
 */
export function backing_color_adapter(style, value) {
    style.backgroundColor = hexaToRgba(value);
}
