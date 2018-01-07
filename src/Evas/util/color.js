
/**
 * Convert 0-255 opacity value to percent one
 * @param {number} word word opacity value
 * @returns {number}
 */
export function getOpacity(word) {
    return Number((word / 255).toFixed(2));
}

/**
 * Format '#rrggbbaa' is not supported, use rgba(r, g, b, a) instead
 * @param {string} hexa Hexadecimal coded color (ex "#aa22dd66")
 * @returns {string}
 */
export function hexaToRgba(hexa) {

    // support shorthand color values as #RGB & #RGBA
    // and removes the sharp (#) character
    const fullHexa = hexa.length >= 7 ?
        hexa.substr(1) :
        Array.from(hexa.substr(1)).map(v => `${v}${v}`).join('');
    // parse full hexa color values as RRGGBB & RRGGBBAA
    const [r1, r2, g1, g2, b1, b2, a1, a2 ] = fullHexa;

    const red = parseInt(`${r1}${r2}`, 16);
    const green = parseInt(`${g1}${g2}`, 16);
    const blue = parseInt(`${b1}${b2}`, 16);

    if (a1 == null) {
        return `rgb(${red}, ${green}, ${blue})`;
    } else {
        // alpha should be a value between 0 & 1
        const alpha = getOpacity(parseInt(`${a1}${a2}`, 16));
        return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }
}
