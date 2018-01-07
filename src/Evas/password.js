

/**
 * Sets if the text is being used for passwords.
 * Enabling this causes all characters to be substituted for '*'.
 *
 * Value must be one of the following:
 * - "on" - Enable
 * - "off" - Disable
 *
 * @see https://docs.enlightenment.org/auto/evas_textblock_style_page.html#evas_textblock_style_password
 * @see https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266--webkit-text-security
 * @param {Object} style CSS Style Object to update
 */
export function password_adapter(style) {
    style.WebkitTextSecurity = 'disc';
}


