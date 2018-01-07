
import { hexaToRgba } from "./util/color";

/**
 * Sets the color of text that is striked through.
 *
 * The following formats are accepted: #RGB, #RGBA, #RRGGBB, #RRGGBBAA
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_strikethrough_color
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color
 * @param {Object} style CSS Style Object to update
 * @param {string} value underline color
 */
export function strikethrough_color_adapter(style, value) {
    style.textDecorationColor = hexaToRgba(value);
}


