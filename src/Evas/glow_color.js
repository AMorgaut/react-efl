
import { hexaToRgba } from "./util/color";

/**
 * Sets the first color of the glow of the text.
 *
 * The following formats are accepted: #RGB, #RGBA, #RRGGBB, #RRGGBBAA
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_glow_color
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
 * @param {Object} style CSS Style Object to update
 * @param {string} value shadow color
 */
export function glow_color_adapter(style, value) {
    // save the color in a temporary property to be added to textShadow in post-process
    style.textGlowwColor = hexaToRgba(value);
}


