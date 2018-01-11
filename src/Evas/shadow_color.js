
import { hexaToRgba } from "./util/color";

/**
 * Sets the color of the shadow of the text.
 *
 * The following formats are accepted: #RGB, #RGBA, #RRGGBB, #RRGGBBAA
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_shadow_color
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
 * @param {Object} style CSS Style Object to update
 * @param {string} value shadow color
 */
export function shadow_color_adapter(style, value) {
    // save the color in a temporary property to be added to textShadow in post-process
    style.textShadowColor = hexaToRgba(value);
}
