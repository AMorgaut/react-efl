import React, { Component } from 'react'
import { getFontStyle } from '../Evas/TextBlock';

export default class Text extends Component {

    render() {
        const { name, children, position = {}, size = {}, visible = true } = this.props;
        const { x = 0,  y = 0 } = position;
        const { w,  h } = size;
        const style = Object.assign(
            {
                position: 'absolute',
                left: x,
                top: y,
                width: w,
                height: h,
                visibility: visible ? 'shown' : 'hidden',
            },
            getFontStyle(this.props),
        );

        return <span id={name} className="Text" style={style}>{children}</span>;
    }

}

export {
    Align,
    Backing_color,
    Color,
    Ellipsis,
    Font, Font_size, Font_style, Font_weight, Font_width,
    Glow_color,
    Left_margin, Linesize,
    Outline_color,
    Password,
    Right_margin,
    Shadow_color, Strikethrough, Strikethrough_color, Style,
    Tabstops, Underline, Underline_color, Underline_dash_color,
    Valign,
    Wrap,
} from '../Evas/TextBlock';
