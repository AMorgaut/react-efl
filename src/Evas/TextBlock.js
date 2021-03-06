import React from 'react';

import {align_adapter} from "./align";
import {backing_color_adapter} from "./backing_color";
import {color_adapter} from "./color";
import {ellipsis_adapter} from "./ellipsis";
import {font_adapter} from "./font";
import {font_size_adapter} from "./font_size";
import {font_style_adapter} from "./font_style";
import {font_weight_adapter} from "./font_weight";
import {font_width_adapter} from "./font_width";
import {glow_color_adapter} from "./glow_color";
import {left_margin_adapter} from "./left_margin";
import {linesize_adapter} from "./linesize";
import {outline_color_adapter} from "./outline_color";
import {password_adapter} from "./password";
import {right_margin_adapter} from "./right_margin";
import {shadow_color_adapter} from "./shadow_color";
import {strikethrough_adapter} from "./strikethrough";
import {strikethrough_color_adapter} from "./strikethrough_color";
import {style_adapter} from "./style";
import {tabstops_adapter} from "./tabstops";
import {underline_adapter} from "./underline";
import {underline_color_adapter} from "./underline_color";
import {underline_dash_color_adapter} from "./underline_dash_color";
import {valign_adapter} from "./valign";
import {wrap_adapter} from "./wrap";

const ADAPTERS = {
    align_adapter,
    backing_color_adapter,
    color_adapter,
    ellipsis_adapter,
    font_adapter,
    font_size_adapter,
    font_style_adapter,
    font_weight_adapter,
    font_width_adapter,
    glow_color_adapter,
    left_margin_adapter,
    linesize_adapter,
    password_adapter,
    outline_color_adapter,
    right_margin_adapter,
    shadow_color_adapter,
    strikethrough_adapter,
    strikethrough_color_adapter,
    style_adapter,
    tabstops_adapter,
    underline_adapter,
    underline_color_adapter,
    underline_dash_color_adapter,
    valign_adapter,
    wrap_adapter,
};


const asis = v => v;

/**
 * Convert EFL Evas style to CSS style
 *
 * @param {Object} evasStyle
 * @returns {Object}
 */
export function getFontStyle(evasStyle) {
    const cssStyle = {
        whiteSpace: 'pre',
    };

    Object.keys(evasStyle).forEach(key => {
        const adapter = ADAPTERS[`${key}_adapter`] || asis;
        adapter(cssStyle, evasStyle[key]);
    });

    // post-process style meta-data
    ['textShadowColor', 'textGlowColor'].forEach(color => {
        if (cssStyle[color]) {
            cssStyle.textShadow += ` ${cssStyle[color]}`;
            delete cssStyle[color];
        }
    });

    return cssStyle;
}

export default function TextBlock(props) {
    // copy the style properties
    const evasStyle = Object.assign({}, props);
    // children is not a style property
    delete evasStyle.children;

    return <span style={getFontStyle(evasStyle)}>{props.children}</span>;
}

// Make EVAS TextBlock style tags available as components
export function Align(props) { return  TextBlock(props); }
export function Backing_color(props) { return  TextBlock(props); }
export function Color(props) { return  TextBlock(props); }
export function Ellipsis(props) { return  TextBlock(props); }
export function Font(props) { return  TextBlock(props); }
export function Font_size(props) { return  TextBlock(props); }
export function Font_style(props) { return  TextBlock(props); }
export function Font_weight(props) { return  TextBlock(props); }
export function Font_width(props) { return  TextBlock(props); }
export function Glow_color(props) { return  TextBlock(props); }
export function Left_margin(props) { return  TextBlock(props); }
export function Linesize(props) { return  TextBlock(props); }
export function Outline_color(props) { return  TextBlock(props); }
export function Password(props) { return  TextBlock(props); }
export function Right_margin(props) { return  TextBlock(props); }
export function Shadow_color(props) { return  TextBlock(props); }
export function Strikethrough(props) { return  TextBlock(props); }
export function Strikethrough_color(props) { return  TextBlock(props); }
export function Style(props) { return  TextBlock(props); }
export function Tabstops(props) { return  TextBlock(props); }
export function Underline(props) { return  TextBlock(props); }
export function Underline_color(props) { return  TextBlock(props); }
export function Underline_dash_color(props) { return  TextBlock(props); }
export function Valign(props) { return  TextBlock(props); }
export function Wrap(props) { return  TextBlock(props); }
